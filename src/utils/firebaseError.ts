type FirebaseMessageErrors =
  | "auth/email-already-exists"
  | "auth/email-already-in-use"
  | "auth/internal-error"
  | "auth/invalid-email"
  | "auth/user-not-found"
  | "auth/invalid-password";

enum ErrorMessage {
  EMAIL_ALREADY_IN_USE = "This email is already in use, please try again",
  EMAIL_ALREADY_EXISTS = "This email already exists, please try again",
  INTERNAL_ERROR = "The authentication server encountered an unexpected error while trying to process the request.",
  INVALID_EMAIL = "The email address is invalid",
  USER_NOT_FOUND = "The user is not found",
  INVALID_PASSWORD = "The password is invalid",
  UNKNOWN_ERROR = "Unknown error occurred while trying to process the request.",
}

export const getFirebaseMessageError = (
  code: FirebaseMessageErrors
): ErrorMessage => {
  switch (code) {
    case "auth/email-already-exists":
      return ErrorMessage.EMAIL_ALREADY_EXISTS;
    case "auth/internal-error":
      return ErrorMessage.INTERNAL_ERROR;
    case "auth/invalid-email":
      return ErrorMessage.INVALID_EMAIL;
    case "auth/user-not-found":
      return ErrorMessage.USER_NOT_FOUND;
    case "auth/invalid-password":
      return ErrorMessage.INVALID_PASSWORD;
    case "auth/email-already-in-use":
      return ErrorMessage.EMAIL_ALREADY_IN_USE;

    default:
      return ErrorMessage.UNKNOWN_ERROR;
  }
};
