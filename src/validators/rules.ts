import type { RegisterOptions } from "react-hook-form";
import { REGEXP, ERROR_MESSAGE } from "./constant";
import type { FormValues } from "./types";

export const getLoginRules=(
  watchPassword?: string
  ):Record<keyof FormValues, RegisterOptions<FormValues>> =>({
    username:{
    required: ERROR_MESSAGE.REQUIRED,
    },

    email:{
    required: ERROR_MESSAGE.REQUIRED,
    pattern:{
      value:REGEXP.EMAIL,
      message: ERROR_MESSAGE.EMAIL_INVALID,
    },
  },

  password:{
    required: ERROR_MESSAGE.REQUIRED,
    pattern: {
      value: REGEXP.PASSWORD,
      message: ERROR_MESSAGE.PASSWORD_INVALID,
    },
  },

  confirmPassword: {
    required: ERROR_MESSAGE.REQUIRED,
    validate: (value) =>
      value === watchPassword || ERROR_MESSAGE.PASSWORD_NOT_MATCH,
  },
});
