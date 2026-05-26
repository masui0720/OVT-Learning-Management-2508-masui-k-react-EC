export const REGEXP = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  PASSWORD:
    /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/,

};

export const ERROR_MESSAGE = {
  REQUIRED: "必須項目です",

  EMAIL_INVALID: "メールアドレスの形式が正しくありません",

  PASSWORD_INVALID:
    "パスワードは8文字以上で英数字を含めてください",

  PASSWORD_NOT_MATCH:
    "パスワードが一致しません",
};