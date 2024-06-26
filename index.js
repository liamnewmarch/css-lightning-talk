import Reveal from './node_modules/reveal.js/dist/reveal.esm.js'
import Highlight from './node_modules/reveal.js/plugin/highlight/highlight.esm.js'

const app = new Reveal({
    plugins: [
        Highlight,
    ],
})

app.initialize()
