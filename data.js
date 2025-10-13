const users = [
  { username: "super1", password: CryptoJS.SHA256("12345").toString(), role: "superadmin" },
  { username: "admin1", password: CryptoJS.SHA256("1111").toString(), role: "admin" },
  { username: "user1", password: CryptoJS.SHA256("0000").toString(), role: "user" }
];
