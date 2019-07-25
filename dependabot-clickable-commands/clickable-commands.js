main();
document.addEventListener("pjax:end", main);

function main() {
  const description = document.querySelectorAll(".js-comment-container")[0];
  // not a PR?
  if (description === undefined) {
    return;
  }

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
  return function handleCommandClick(event) {
    const button = event.currentTarget;
    button.disabled = true;
    button.textContent += "…";

    const commentInput = document.querySelector('[name="comment[body]"]');
    commentInput.value = command;

    findFormOf(commentInput).submit();

    commentInput.value = "";
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
