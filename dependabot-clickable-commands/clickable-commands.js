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
  const isDependabotPR =
    // name when using the GitHub app
    prAuthorName === "dependabot-preview" ||
    // name for automated security fixes from GitHub
    prAuthorName === "dependabot";

  if (isDependabotPR === false) {
    return;
  }

  const potentialCommands = description.querySelectorAll(".comment-body code");
  const commands = Array.from(potentialCommands).filter((code) =>
    /^@dependabot /.test(code.innerText)
  );

  commands.forEach((code) => {
    const command = code.innerText;

    /**
     * matching `@dependabot ignore this [patch|minor|major] version`
     */
    const alternatives = command.match(/\[.+?\]/);
    if (alternatives !== null) {
      // ["@dependabot ignore this ", " version"]
      const commandTemplate = command.split(alternatives[0]);
      code.innerText = commandTemplate[0]; // "@dependabot ignore this"

      alternatives[0]
        .slice(1, -1)
        .split("|")
        .forEach((commandValue) => {
          const button = createCommandButton(
            commandValue,
            createCommandClickHandler(
              command.replace(alternatives[0], commandValue)
            )
          );
          code.appendChild(button); // "@dependabot ignore this patch"
        });

      code.appendChild(document.createTextNode(commandTemplate[1])); // "@dependabot ignore this patch version"
    } else {
      const button = createCommandButton(
        command,
        createCommandClickHandler(command)
      );
      code.parentNode.replaceChild(button, code);
    }
  });
}

/**
 *
 * @param {string} commands
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

/**
 *
 * @param {string} commandText
 * @param {EventListener} clickHandler
 * @returns {HTMLButtonElement}
 */
function createCommandButton(commandText, clickHandler) {
  const button = document.createElement("button");
  button.appendChild(document.createTextNode(commandText));
  button.classList.add("btn", "btn-sm");
  button.addEventListener("click", clickHandler);
  return button;
}
