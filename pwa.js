if ("launchQueue" in window) {
    window.launchQueue.setConsumer(async launchParams => {
      if (launchParams && launchParams.files && launchParams.files.length) {
        const file = launchParams.files[0];
        const text = await file.text();
        console.log(text);
      } else {
        const widget = new window.Widget({
          url: "index.html",
          name: "MyWidget",
          shortName: "MyWidget",
          icon: "icon.png",
          description: "My widget description",
          author: "My name",
          preferences: [
            {
              name: "backgroundColor",
              type: "color",
              defaultValue: "#FFFFFF",
              displayName: "Background color",
            },
            {
              name: "textColor",
              type: "color",
              defaultValue: "#000000",
              displayName: "Text color",
            },
          ],
          onupdated: () => console.log("Widget updated"),
          onremoved: () => console.log("Widget removed"),
          onpreviewrequested: () => console.log("Widget preview requested"),
          onconfigurationrequested: () =>
            console.log("Widget configuration requested"),
        });
      }
    });
  }
  