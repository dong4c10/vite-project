export let localServ = {
  setUser: (user) => {
    //lưu
    let dataJson = JSON.stringify(user);
    localStorage.setItem("currentUser", dataJson);
  },
  getUser: () => {
    //lấy
    const dataJson = localStorage.getItem("currentUser");
    return JSON.parse(dataJson);
  },
  removeUser: () => {
    //xóa
    localStorage.removeItem('currentUser');
  }
};
