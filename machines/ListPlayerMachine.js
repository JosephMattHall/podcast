import { createMachine } from "xstate";


const ListPlayerMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QBkCWsAuAFANgQwE8wAnAWTwGMALVAOzADocB7PCOqAYgDM9UcA2gAYAuolAAHZrFQZUzWuJAAPRAEYATEIYBOPfo0AOQwBYNAVgDMOgDQgCiALRqdahgHZTagGyHvOo29-SwBfELs0TFxCEnJqOkYWNg5OJIhIYTEkECkZOQUlVQRHd20NbyFDHXd3cyMhCo07B2K1Sw0GIUtLNXd9c2NDDQ0wiPRsfCIyShp6JlZ2Wi5qPCWwABViSgBrTKVc2XlFbKLnHW12oT6TPSr3LXNmp16TBiGhNr6Kvx1RkEiJjFpvE5sQwGwCJwVmtNjs9tkDvljqAiho3CYKmoTB9jGofN4TE9it5LAxupohEIdP4BuY1OYTH8AdEpnFZowwRCGBI8ABXWCQTgSSbwyTSQ4FE7PV7YwzmSp0m7WdyE+yIQyknyGa4mPFqK4+JnjFmxGYJBiciAEbmTFI8-lgUU5cVIwqIBm6e7eTx1DQmGo6SyPNUIDQ9DyWGpDcwxjQ6cy1I1RSamkEc8FWm2EFJgWgQJ2Io5uhAuC7Rj54yzeMPVolhtzuSOeCyx+OJ8L-Y0p4Hsi0Z6259IQIUi0T7F1FqUIPQMCx3HQmJUx8zeOsq3RCG7lFW9eXuMId2jMdLwbLM7tshLjvKTlFOMOGMlaa63aoPImODR9Wdeb2GfXelYSaAqyZpzGkHDXhKyIqE44YqoGZjUmoVT+E0IZnA2v7LpYm5foYwEmj25qWi0Yo3pKd6tN45gMBiwzPpG1hdKqLSOK85JaC4-7UsMQgjB255ApeoL9tyfIChAUGulOzi9HR1Z8Y2jbnJYrHqKUZKGF0Ax4l0C6MoJXbCWB6ZcsK2ZLNJt6wSWZhkvq1haJYpgmDG7hElipJhtcvhYkM9KERepl9lyg6QNZlG2Z+OgeBq8pyligbVOpCDdO4HjeI57h6YuAyGWMyYmWmDC8PwvJgpFMGojcDDehiQgJmpuEEpYH4uFhuo0TGuFmJ4B4hEAA */
createMachine({
  id: "ListPlayerMachine",
  initial: "loading",

  context: {
    audio: null,
    duration: 0,
    elapsed: 0,
    title: "",
    episode: 0,
    artwork: ""
  },
  states: {
    loading: {
      on: {
        fail: "failure",
        loaded: "ready",

        changeTrack: {
          target: "loading",
          internal: true
        }  
      }
    },
    ready: {
      states: {
        paused: {
          on: {
            play: "playing"
          }
        },
        playing: {
          on: {
            pause: "paused",
            end: "ended"
          }
        },
        ended: {
          on: {
            play: "playing"
          }
        }
      },

      initial: "paused",

      on: {
        changeTrack: "loading"
      }
    },
    failure: {}
  },

  
}

)



