import { BACK_URL } from "./constants";
import { IUser } from "./interfaces";

const api = {
  registerUser: async (userData: IUser): Promise<IUser | void> => {
    try {
      const resp = await fetch(BACK_URL + "/register-user", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(userData),
      });
      console.log('api call: registering user');
      return await resp.json();

    } catch (err) {
      console.log(err);
    }
  },

  loadUser: async (nameField: string): Promise<IUser | void> => {
    try {
      const resp = await fetch(BACK_URL + `/load-user/${nameField}`);
      console.log(`api call: fetching ${nameField} user data`);
      return await resp.json();

    } catch (err) {
      console.log(err);
    }
  },

  loadAllUsers: async (): Promise<IUser[] | void> => {
    try {
      const resp = await fetch(BACK_URL + `/load-all-users/`);
      console.log('api call: fetching all users');
      return await resp.json();

    } catch (err) {
      console.log(err);
    }
  },

  resetUser: async (userName: string): Promise<void | true> => {
    try {
      await fetch(BACK_URL + `/reset-user/${userName}`, { method: 'DELETE' });
      console.log(`api call: removing user ${userName}`);
      return true;

    } catch (err) {
      console.log(err);
    }
  }
};

export default api;
