// TODO: imp exp....
// import  faker

// eslint-disable-next-line no-unused-vars
function makeBoard() {
  return {
    title: faker...
  };
}

// eslint-disable-next-line no-unused-vars
function makeCard() {}

// eslint-disable-next-line no-unused-vars
function makeUser() {}

/**
User (
id:
first_name:
last_name:
avatar:
email:
)
 **/

// eslint-disable-next-line no-unused-vars
export default (boardCount = 4, maxCardCount = 10, maxUserCount = 5) => {
  const boards = [];

  for (let i = 0; i < boardCount; i++) {
    makeBoard();
  }

  return boards;
};
