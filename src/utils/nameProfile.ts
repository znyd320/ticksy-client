const nameProfile = (title: string) => {
  if (title) {
    if (title?.split(" ")?.length === 1) {
      const first = title?.split("")[0];
      return first[0];
    }

    if (title?.split(" ")?.length === 2) {
      const first = title?.split(" ")[0];
      const second = title?.split(" ")[1];
      return first[0] + second[0];
    }
  }
};

export default nameProfile;
