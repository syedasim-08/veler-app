if ('launchWidget' in navigator) {
    // The widget is installed, launch it
    navigator.launchWidget('My PWA Widget');
  } else {
    // The widget is not installed, prompt the user to install it
    const installButton = document.createElement('button');
    installButton.innerText = 'Install Widget';
    installButton.addEventListener('click', () => {
      navigator.installWidget('/widget.json');
    });
    document.body.appendChild(installButton);
  }
  