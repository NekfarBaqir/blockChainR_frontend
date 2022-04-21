import React from "react";
import { toast } from "react-toastify";

const showMessage = (type, message) => {
  const typeChecker = {
    success: () => toast.success(message),
    warning: () => toast.warn(message),
    error: () => toast.error(message),
  };
  return typeChecker[type]();
};

export default showMessage;
