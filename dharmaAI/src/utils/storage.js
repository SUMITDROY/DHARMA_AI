export const getStoredHistory = () => {
    return JSON.parse(localStorage.getItem("dharmachatHistory")) || [];
  };
  
  export const saveHistory = (history) => {
    localStorage.setItem("dharmachatHistory", JSON.stringify(history));
  };