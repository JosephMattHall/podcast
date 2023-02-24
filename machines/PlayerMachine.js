import { createMachine } from "xstate";



 
machine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYggFcAndAF1wHt8BhbdfGAbQAYBdRUAA71YuOo34gAHogAsAVgBsAOgWq161QHYANCACeiALQBGAMxKATBYWKLcgL73daLHkKlyAiLTABRADboArCQ3HxIIEIiYvgS0ggWplxKMsYyXAp2XNk5proGCQAcFkrFXBYAnJoWqRbGXBUyjs4YOATEJADKTABKAKoAQmESUaIMsRHxhnUlcokypppy+YjWFUpyFYumMpq19Y3NIC5t7iQhYADWobwjwmPik0Yyuyoa7zr6RtYpcqbGFkKhTSCiq1gURxObmISgE6HIIQgJAACgAZACCAE1hhFRjE4kZjI0VgguJDWtCiLDAnoCFAUei+p1fDjBPd8U8EgsSWSjvh6BA4BIoe0iHdouMCQhpjILCSTApNEoclxjHM5IVNIUKhlya5RbD4YjxQ8JqB4oD5Zp1nIcmq7JrtbqnMcKQaBDS6SaOebZJ8CsYiUoKiGKoVdvsGk1HPYgA */
createMachine({
  initial: "paused",
  context: {
    trackList: [],
    currentTrack: null,
    duration: 0,
    elapsed: 0,
    title: "",
    art: "",
  },
  on: {
    durationChange: {
        actions: [
            assign({
                duration: (context, event) => event.target.duration
            }),
            'renderDuration'
        ]
    },
    updateElapsed: {
        actions: [
            assign({
                elapsed: (context, event) => event.target.elapsed
            }),
            'renderElapsed',
            'updateScrubber'
        ]
    },
    SCRUB: {
        actions: [
            assign({
                elapsed: (context, event) => event.value * context.duration
            }),
            'updateElapsed',
            'renderElapsed',
            'updateScrubber'
        ]
    },
    seeked: {
        actions: [
            assign({
                elapsed: (context, event) => event.target.elapsed
            }),
            'renderElapsed',
            'updateScrubber'
        ]
    }
  },
  states: {
    paused: {
      on: {
        PLAY: {
            target: 'playing',
            actions: ['playAudio']
        },
      }
    },
    playing: {
      on: {
        PAUSE:  {
            target: 'paused',
            actions: ['pauseAudio']
        },
      }
    }
  },
    actions: {
        actions: {
            playAudio: () => {
                audio.play()
                playToggle.dataset.state = 'playing'
            },
            pauseAudio: () => {
                audio.pause()
                playToggle.dataset.state = 'paused'
            },
            updateElapsed: (context, event) => {
                audio.elapsed = context.elapsed
            },
            renderElapsed: (context) => {
                elapsed.innerText = formatDuration(context.elapsed)
            },
            renderDuration: (context) => {
                duration.innerText = formatDuration(context.duration)
            },
            updateScrubber: (context) => {
                // update position of the <input type="range"> element
                scrubber.value = context.elapsed / context.duration
                // update position of the <progress> element
                progress.value = context.elapsed / context.duration
            }
        }
    } 
})
function formatDuration(duration) {
	function formatTime(int, options) {
		const leadingZero = options && options.leadingZero
		return Math.floor(int).toString().padStart(leadingZero ? 2 : 0, '0')
	}
	
	const hours = Math.floor(duration / 60 / 60)
	const minutes = (duration - (hours * 60 * 60)) / 60
	const seconds = duration % 60
	
	return [
		formatTime(hours),
		formatTime(minutes, { leadingZero: true }),
		formatTime(seconds, { leadingZero: true })
	].join(':')
}