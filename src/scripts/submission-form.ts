interface SubmissionFormOptions {
  errorMessage: string;
  formSelector: string;
  pendingLabel: string;
  redirectPath?: string;
  sourcePath: string;
  submissionType: "application" | "waitlist";
  submitUrl: string;
  successMessage?: string;
}

const fieldSelector = "input, select, textarea";

const getErrorElement = (form: HTMLFormElement, name: string) =>
  form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);

const setFieldError = (
  form: HTMLFormElement,
  field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
) => {
  const errorElement = getErrorElement(form, field.name);

  if (!errorElement) {
    return field.checkValidity();
  }

  if (field.checkValidity()) {
    errorElement.classList.add("hidden");
    errorElement.textContent = "";
    field.removeAttribute("aria-invalid");
    return true;
  }

  errorElement.classList.remove("hidden");
  errorElement.textContent = field.validationMessage;
  field.setAttribute("aria-invalid", "true");
  return false;
};

const setStatus = (
  form: HTMLFormElement,
  tone: "error" | "idle" | "success",
  message: string,
) => {
  const status = form.querySelector<HTMLElement>("[data-form-status]");

  if (!status) {
    return;
  }

  status.className =
    "rounded-2xl border px-4 py-3 text-sm " +
    (tone === "error"
      ? "border-red-500/30 bg-red-500/10 text-red-200"
      : tone === "success"
        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
        : "hidden");

  status.textContent = message;

  if (tone === "idle") {
    status.classList.add("hidden");
  }
};

const togglePending = (
  form: HTMLFormElement,
  pending: boolean,
  pendingLabel: string,
) => {
  const submitButton = form.querySelector<HTMLButtonElement>(
    "[data-submit-button]",
  );
  const submitLabel = form.querySelector<HTMLElement>("[data-submit-label]");

  if (!submitButton || !submitLabel) {
    return;
  }

  const idleLabel =
    submitButton.dataset.idleLabel ?? submitLabel.textContent ?? "";

  submitButton.disabled = pending;
  submitLabel.textContent = pending ? pendingLabel : idleLabel;
};

const validateForm = (form: HTMLFormElement) => {
  const fields = Array.from(
    form.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >(fieldSelector),
  );

  let firstInvalidField:
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement
    | undefined;

  for (const field of fields) {
    const isValid = setFieldError(form, field);

    if (!isValid && !firstInvalidField) {
      firstInvalidField = field;
    }
  }

  return firstInvalidField;
};

export const setupSubmissionForm = (options: SubmissionFormOptions) => {
  const form = document.querySelector<HTMLFormElement>(options.formSelector);

  if (!form || form.dataset.enhanced === "true") {
    return;
  }

  form.dataset.enhanced = "true";

  form.addEventListener("input", (event) => {
    const field = event.target;

    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLSelectElement ||
      field instanceof HTMLTextAreaElement
    ) {
      setFieldError(form, field);
    }
  });

  form.addEventListener("change", (event) => {
    const field = event.target;

    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLSelectElement ||
      field instanceof HTMLTextAreaElement
    ) {
      setFieldError(form, field);
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstInvalidField = validateForm(form);

    if (firstInvalidField) {
      setStatus(form, "error", "Please review the highlighted fields.");
      firstInvalidField.focus();
      return;
    }

    if (!options.submitUrl) {
      setStatus(
        form,
        "error",
        "Submissions are not configured yet. Add PUBLIC_SHIP_IT_ISLAND_SUBMIT_URL to enable this form.",
      );
      return;
    }

    setStatus(form, "idle", "");
    togglePending(form, true, options.pendingLabel);

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      payload.sourcePath = options.sourcePath;
      payload.submissionType = options.submissionType;
      payload.submittedAt = new Date().toISOString();

      const response = await fetch(options.submitUrl, {
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          // Apps Script web apps often fail browser preflight checks for JSON.
          // Sending the same JSON string as text/plain keeps the payload readable
          // in event.postData.contents without triggering a CORS preflight.
          "Content-Type": "text/plain;charset=utf-8",
        },
        method: "POST",
      });

      const responseBody = await response
        .json()
        .catch(() => ({ message: options.errorMessage, ok: false }));

      if (!response.ok || !responseBody.ok) {
        setStatus(form, "error", responseBody.message ?? options.errorMessage);
        return;
      }

      if (options.redirectPath) {
        window.location.assign(
          responseBody.redirectPath ?? options.redirectPath,
        );
        return;
      }

      form.reset();
      setStatus(
        form,
        "success",
        responseBody.message ?? options.successMessage ?? "Submitted.",
      );
    } catch {
      setStatus(form, "error", options.errorMessage);
    } finally {
      togglePending(form, false, options.pendingLabel);
    }
  });
};
