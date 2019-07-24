main();

function main() {
  const description = document.querySelectorAll(".js-comment-container")[0];
  const prAuthorName = description.querySelector(
    ".timeline-comment-header .author"
  ).innerText;
  const isDependabotPR = prAuthorName === "dependabot-preview";

  if (isDependabotPR === false) {
    return;
  }

  const potentialCommands = description.querySelectorAll(".comment-body code");
  const commands = Array.from(potentialCommands).filter(code =>
    /^@dependabot /.test(code.innerText)
  );

  commands.forEach(code => {
    const command = code.innerText;

    const button = document.createElement("button");
    button.appendChild(document.createTextNode(command));
    button.addEventListener("click", createCommandClickHandler(command));

    code.parentNode.replaceChild(button, code);
  });
}

/**
 *
 * @param {string} command
 */
function createCommandClickHandler(command) {
  return function handleCommandClick() {
    const commentInput = document.querySelector('[name="comment[body]"]');
    commentInput.value = command;

    findFormOf(commentInput).submit();
  };
}

/**
 *
 * @param {HTMLElement} input
 * @returns {HTMLFormElement | null}
 */
function findFormOf(input) {
  let currentElement = input;
  while (currentElement != null && currentElement.nodeName !== "FORM") {
    currentElement = currentElement.parentElement;
  }

  return currentElement;
}