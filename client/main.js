const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})





// let input = document.querySelector("input");
// let textBox = document.querySelector(".messages-container");

// // Create WebSocket connection.
// const socket = new WebSocket("ws://localhost:8080/ws");

// // Connection opened
// socket.addEventListener("open", (event) => {
//   socket.send("Hello Server!");
// });

// // Listen for messages
// socket.addEventListener("message", (event) => {
//   console.log("Message from server:", event.data);

//   if (textBox) {
//     let div = document.createElement("div");
//     div.textContent = event.data;
//     textBox.appendChild(div);
//   }
// });

// // Handle errors
// socket.addEventListener("error", (event) => {
//   console.error("WebSocket error:", event);
// });

// // Handle disconnection
// socket.addEventListener("close", (event) => {
//   if (event.wasClean) {
//     console.log(`Closed cleanly, code=${event.code}, reason=${event.reason}`);
//   } else {
//     console.log("Connection died");
//   }
// });

// if (input && textBox) {
//   input.addEventListener("change", (element) => {
//     console.log(element.target.value);
//     const message = element.target.value;
//     socket.send(message);

//     element.target.value = "";
//   });
// }
