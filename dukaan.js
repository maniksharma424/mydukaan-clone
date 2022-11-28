let Header = document.getElementById("HEADER")

window.onscroll = () => {
    if(window.scrollY>257){
        Header.style.backgroundColor = 'white'
        Header.style.boxShadow = '0 4px 20px 0 hsl(0deg 0% 60% / 20%)'
        Header.innerHTML = `<div  class="first-nav">
        <a href=""><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg5IiBoZWlnaHQ9Ijg1IiB2aWV3Qm94PSIwIDAgMjg5IDg1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDEzODhfMTIwNjk3KSI+CjxwYXRoIGQ9Ik0xMzEuMDk5IDIwLjY5OThWNTguOTk5OEMxMzEuMDk5IDU5Ljg5OTggMTMwLjU5OSA2MC4zOTk4IDEyOS42OTkgNjAuMzk5OEgxMjQuODk5QzEyMy45OTkgNjAuMzk5OCAxMjMuNDk5IDU5Ljg5OTggMTIzLjQ5OSA1OC45OTk4VjU2Ljk5OThDMTIxLjM5OSA1OS42OTk4IDExOC4yOTkgNjEuMjk5OCAxMTMuOTk5IDYxLjI5OThDMTA2LjE5OSA2MS4yOTk4IDk5LjY5OTIgNTQuNTk5OCA5OS42OTkyIDQ1Ljc5OThDOTkuNjk5MiAzNi45OTk4IDEwNi4xOTkgMzAuMjk5OCAxMTMuOTk5IDMwLjI5OThDMTE4LjI5OSAzMC4yOTk4IDEyMS4zOTkgMzEuODk5OCAxMjMuNDk5IDM0LjU5OThWMjAuNjk5OEMxMjMuNDk5IDE5Ljc5OTggMTIzLjk5OSAxOS4yOTk4IDEyNC44OTkgMTkuMjk5OEgxMjkuNjk5QzEzMC41OTkgMTkuMjk5OCAxMzEuMDk5IDE5Ljc5OTggMTMxLjA5OSAyMC42OTk4Wk0xMjMuNDk5IDQ1LjY5OThDMTIzLjQ5OSA0MC43OTk4IDExOS45OTkgMzcuMzk5OCAxMTUuMzk5IDM3LjM5OThDMTEwLjY5OSAzNy4zOTk4IDEwNy4yOTkgNDAuNzk5OCAxMDcuMjk5IDQ1LjY5OThDMTA3LjI5OSA1MC41OTk4IDExMC43OTkgNTMuOTk5OCAxMTUuMzk5IDUzLjk5OThDMTE5Ljk5OSA1My45OTk4IDEyMy40OTkgNTAuNjk5OCAxMjMuNDk5IDQ1LjY5OThaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTU4LjU5OSAzMUMxNTkuNDk5IDMxIDE1OS45OTkgMzEuNSAxNTkuOTk5IDMyLjRWNTlDMTU5Ljk5OSA1OS45IDE1OS40OTkgNjAuNCAxNTguNTk5IDYwLjRIMTUzLjc5OUMxNTIuODk5IDYwLjQgMTUyLjM5OSA1OS45IDE1Mi4zOTkgNTlWNTcuNEMxNTAuNzk5IDU5LjkgMTQ4LjA5OSA2MS4yIDE0NC4zOTkgNjEuMkMxMzguODk5IDYxLjIgMTM0Ljc5OSA1NyAxMzQuNzk5IDQ5LjhWMzIuNEMxMzQuNzk5IDMxLjUgMTM1LjI5OSAzMSAxMzYuMTk5IDMxSDE0MC45OTlDMTQxLjg5OSAzMSAxNDIuMzk5IDMxLjUgMTQyLjM5OSAzMi40VjQ5LjJDMTQyLjM5OSA1Mi42IDE0NC4zOTkgNTQuMiAxNDcuMDk5IDU0LjJDMTUwLjA5OSA1NC4yIDE1Mi4zOTkgNTIuNSAxNTIuMzk5IDQ4LjFWMzIuNEMxNTIuMzk5IDMxLjUgMTUyLjg5OSAzMSAxNTMuNzk5IDMxSDE1OC41OTlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTg4Ljk5OCA2MC4zOTk4SDE4My4zOThDMTgyLjY5OCA2MC4zOTk4IDE4Mi4wOTggNjAuMDk5OCAxODEuNjk4IDU5LjQ5OThMMTcxLjk5OCA0Ny4wOTk4VjU4Ljk5OThDMTcxLjk5OCA1OS44OTk4IDE3MS40OTggNjAuMzk5OCAxNzAuNTk4IDYwLjM5OThIMTY1Ljc5OEMxNjQuODk4IDYwLjM5OTggMTY0LjM5OCA1OS44OTk4IDE2NC4zOTggNTguOTk5OFYyMC42OTk4QzE2NC4zOTggMTkuNzk5OCAxNjQuODk4IDE5LjI5OTggMTY1Ljc5OCAxOS4yOTk4SDE3MC41OThDMTcxLjQ5OCAxOS4yOTk4IDE3MS45OTggMTkuNzk5OCAxNzEuOTk4IDIwLjY5OThWNDMuOTk5OEwxODEuMDk4IDMxLjg5OThDMTgxLjQ5OCAzMS4yOTk4IDE4Mi4wOTggMzAuOTk5OCAxODIuNzk4IDMwLjk5OThIMTg4LjM5OEMxODkuNDk4IDMwLjk5OTggMTg5Ljg5OCAzMS43OTk4IDE4OS4xOTggMzIuNjk5OEwxNzkuMjk4IDQ1LjU5OThMMTg5LjY5OCA1OC43OTk4QzE5MC41OTggNTkuNjk5OCAxOTAuMTk4IDYwLjM5OTggMTg4Ljk5OCA2MC4zOTk4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIwNC41OTkgMzAuMjAwMkMyMTEuMDk5IDMwLjIwMDIgMjE2LjU5OSAzNC4xMDAyIDIxNi41OTkgNDEuNzAwMlY1OS4wMDAyQzIxNi41OTkgNTkuOTAwMiAyMTYuMDk5IDYwLjQwMDIgMjE1LjE5OSA2MC40MDAySDIxMC41OTlDMjA5LjY5OSA2MC40MDAyIDIwOS4xOTkgNTkuOTAwMiAyMDkuMTk5IDU5LjAwMDJWNTcuOTAwMkMyMDcuNDk5IDYwLjAwMDIgMjA0Ljk5OSA2MS4yMDAyIDIwMS4xOTkgNjEuMjAwMkMxOTUuOTk5IDYxLjIwMDIgMTkxLjI5OSA1OC4xMDAyIDE5MS4yOTkgNTIuMDAwMkMxOTEuMjk5IDQ1LjgwMDIgMTk1Ljk5OSA0Mi44MDAyIDIwMS4xOTkgNDIuODAwMkMyMDQuODk5IDQyLjgwMDIgMjA3LjQ5OSA0My45MDAyIDIwOS4xOTkgNDUuNDAwMlY0Mi4zMDAyQzIwOS4xOTkgMzguODAwMiAyMDcuMzk5IDM3LjQwMDIgMjA0LjU5OSAzNy40MDAyQzIwMi4zOTkgMzcuNDAwMiAyMDAuNjk5IDM4LjMwMDIgMjAwLjE5OSAzOS45MDAyQzE5OS44OTkgNDAuNzAwMiAxOTkuNTk5IDQxLjEwMDIgMTk4LjY5OSA0MS4xMDAySDE5My45OTlDMTkzLjA5OSA0MS4xMDAyIDE5Mi40OTkgNDAuNjAwMiAxOTIuNTk5IDM5LjYwMDJDMTkzLjQ5OSAzMy42MDAyIDE5OC41OTkgMzAuMjAwMiAyMDQuNTk5IDMwLjIwMDJaTTIwOS4xOTkgNTIuMDAwMkMyMDkuMTk5IDQ5LjcwMDIgMjA3LjA5OSA0OC4zMDAyIDIwMy43OTkgNDguMzAwMkMyMDAuNDk5IDQ4LjMwMDIgMTk4Ljg5OSA0OS44MDAyIDE5OC44OTkgNTIuMDAwMkMxOTguODk5IDU0LjIwMDIgMjAwLjQ5OSA1NS43MDAyIDIwMy43OTkgNTUuNzAwMkMyMDcuMDk5IDU1LjYwMDIgMjA5LjE5OSA1NC4xMDAyIDIwOS4xOTkgNTIuMDAwMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMzMuNCAzMC4yMDAyQzIzOS45IDMwLjIwMDIgMjQ1LjQgMzQuMTAwMiAyNDUuNCA0MS43MDAyVjU5LjAwMDJDMjQ1LjQgNTkuOTAwMiAyNDQuOSA2MC40MDAyIDI0NCA2MC40MDAySDIzOS40QzIzOC41IDYwLjQwMDIgMjM4IDU5LjkwMDIgMjM4IDU5LjAwMDJWNTcuOTAwMkMyMzYuMyA2MC4wMDAyIDIzMy44IDYxLjIwMDIgMjMwIDYxLjIwMDJDMjI0LjggNjEuMjAwMiAyMjAuMSA1OC4xMDAyIDIyMC4xIDUyLjAwMDJDMjIwLjEgNDUuODAwMiAyMjQuOCA0Mi44MDAyIDIzMCA0Mi44MDAyQzIzMy43IDQyLjgwMDIgMjM2LjMgNDMuOTAwMiAyMzggNDUuNDAwMlY0Mi4zMDAyQzIzOCAzOC44MDAyIDIzNi4yIDM3LjQwMDIgMjMzLjQgMzcuNDAwMkMyMzEuMiAzNy40MDAyIDIyOS41IDM4LjMwMDIgMjI5IDM5LjkwMDJDMjI4LjcgNDAuNzAwMiAyMjguNCA0MS4xMDAyIDIyNy41IDQxLjEwMDJIMjIyLjhDMjIxLjkgNDEuMTAwMiAyMjEuMyA0MC42MDAyIDIyMS40IDM5LjYwMDJDMjIyLjIgMzMuNjAwMiAyMjcuNCAzMC4yMDAyIDIzMy40IDMwLjIwMDJaTTIzNy45IDUyLjAwMDJDMjM3LjkgNDkuNzAwMiAyMzUuOCA0OC4zMDAyIDIzMi41IDQ4LjMwMDJDMjI5LjIgNDguMzAwMiAyMjcuNiA0OS44MDAyIDIyNy42IDUyLjAwMDJDMjI3LjYgNTQuMjAwMiAyMjkuMiA1NS43MDAyIDIzMi41IDU1LjcwMDJDMjM1LjkgNTUuNjAwMiAyMzcuOSA1NC4xMDAyIDIzNy45IDUyLjAwMDJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjY0Ljc5OSAzMC4yMDAyQzI3MC4yOTkgMzAuMjAwMiAyNzQuMzk5IDM0LjQwMDIgMjc0LjM5OSA0MS42MDAyVjU5LjAwMDJDMjc0LjM5OSA1OS45MDAyIDI3My44OTkgNjAuNDAwMiAyNzIuOTk5IDYwLjQwMDJIMjY4LjE5OUMyNjcuMjk5IDYwLjQwMDIgMjY2Ljc5OSA1OS45MDAyIDI2Ni43OTkgNTkuMDAwMlY0Mi4yMDAyQzI2Ni43OTkgMzguODAwMiAyNjQuNzk5IDM3LjIwMDIgMjYyLjA5OSAzNy4yMDAyQzI1OS4wOTkgMzcuMjAwMiAyNTYuNzk5IDM4LjkwMDIgMjU2Ljc5OSA0My4zMDAyVjU5LjAwMDJDMjU2Ljc5OSA1OS45MDAyIDI1Ni4yOTkgNjAuNDAwMiAyNTUuMzk5IDYwLjQwMDJIMjUwLjU5OUMyNDkuNjk5IDYwLjQwMDIgMjQ5LjE5OSA1OS45MDAyIDI0OS4xOTkgNTkuMDAwMlYzMi40MDAyQzI0OS4xOTkgMzEuNTAwMiAyNDkuNjk5IDMxLjAwMDIgMjUwLjU5OSAzMS4wMDAySDI1NS4zOTlDMjU2LjI5OSAzMS4wMDAyIDI1Ni43OTkgMzEuNTAwMiAyNTYuNzk5IDMyLjQwMDJWMzQuMDAwMkMyNTguMzk5IDMxLjYwMDIgMjYxLjA5OSAzMC4yMDAyIDI2NC43OTkgMzAuMjAwMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00Mi4xIDg0LjJDNjUuMzUxMiA4NC4yIDg0LjIgNjUuMzUxMiA4NC4yIDQyLjFDODQuMiAxOC44NDg4IDY1LjM1MTIgMCA0Mi4xIDBDMTguODQ4OCAwIDAgMTguODQ4OCAwIDQyLjFDMCA2NS4zNTEyIDE4Ljg0ODggODQuMiA0Mi4xIDg0LjJaIiBmaWxsPSIjMTQ2RUI0Ii8+CjxwYXRoIGQ9Ik01OC42OTkyIDIwSDI1LjQ5OTJDMjIuMjk5MiAyMCAxOS42OTkyIDIyLjYgMTkuNjk5MiAyNS44VjU4LjNDMTkuNjk5MiA2MS41IDIyLjI5OTIgNjQuMSAyNS40OTkyIDY0LjFINTguNjk5MkM2MS44OTkyIDY0LjEgNjQuNDk5MiA2MS41IDY0LjQ5OTIgNTguM1YyNS44QzY0LjQ5OTIgMjIuNiA2MS44OTkyIDIwIDU4LjY5OTIgMjBaTTQyLjA5OTIgNDUuOUMzMy44OTkyIDQ1LjkgMjcuMDk5MiAzOS41IDI2LjM5OTIgMzEuNEMyNi4yOTkyIDMwLjUgMjYuNTk5MiAyOS43IDI3LjE5OTIgMjkuMUMyNy43OTkyIDI4LjUgMjguNDk5MiAyOC4xIDI5LjM5OTIgMjhDMzAuMTk5MiAyNy45IDMxLjA5OTIgMjguMiAzMS42OTkyIDI4LjdDMzIuMzk5MiAyOS4zIDMyLjY5OTIgMzAgMzIuNzk5MiAzMC45QzMzLjE5OTIgMzUuNyAzNy4xOTkyIDM5LjUgNDIuMDk5MiAzOS41QzQ2Ljg5OTIgMzkuNSA1MC45OTkyIDM1LjcgNTEuMzk5MiAzMC45QzUxLjQ5OTIgMjkuMiA1My4wOTkyIDI3LjkgNTQuNzk5MiAyOEM1NS42OTkyIDI4LjEgNTYuMzk5MiAyOC41IDU2Ljk5OTIgMjkuMUM1Ny41OTkyIDI5LjcgNTcuNzk5MiAzMC42IDU3Ljc5OTIgMzEuNEM1Ny4wOTkyIDM5LjUgNTAuMTk5MiA0NS45IDQyLjA5OTIgNDUuOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yODEuMiAxNi40MDA0QzI3Ny4yIDE2LjQwMDQgMjczLjkgMTkuNzAwNCAyNzMuOSAyMy43MDA0QzI3My45IDI3LjcwMDQgMjc3LjIgMzEuMDAwNCAyODEuMiAzMS4wMDA0QzI4NS4yIDMxLjAwMDQgMjg4LjUgMjcuNzAwNCAyODguNSAyMy43MDA0QzI4OC41IDE5LjcwMDQgMjg1LjMgMTYuNDAwNCAyODEuMiAxNi40MDA0Wk0yODEuMiAxNy41MDA0QzI4NC42IDE3LjUwMDQgMjg3LjQgMjAuMzAwNCAyODcuNCAyMy43MDA0QzI4Ny40IDI3LjEwMDQgMjg0LjYgMjkuOTAwNCAyODEuMiAyOS45MDA0QzI3Ny44IDI5LjkwMDQgMjc1IDI3LjEwMDQgMjc1IDIzLjcwMDRDMjc1IDIwLjMwMDQgMjc3LjggMTcuNTAwNCAyODEuMiAxNy41MDA0Wk0yNzkgMjAuMzAwNFYyNy4xMDA0SDI4MC4xVjI0LjYwMDRIMjgxLjZMMjgzLjIgMjcuMTAwNEgyODQuM0wyODIuNyAyNC41MDA0QzI4Mi45IDI0LjUwMDQgMjgzLjEgMjQuNDAwNCAyODMuMiAyNC40MDA0QzI4My41IDI0LjMwMDQgMjgzLjggMjQuMTAwNCAyODQgMjMuOTAwNEMyODQuMiAyMy43MDA0IDI4NC4zIDIzLjUwMDQgMjg0LjQgMjMuMjAwNEMyODQuNSAyMy4wMDA0IDI4NC41IDIyLjcwMDQgMjg0LjUgMjIuNTAwNEMyODQuNSAyMi4zMDA0IDI4NC41IDIyLjAwMDQgMjg0LjQgMjEuODAwNEMyODQuMyAyMS42MDA0IDI4NC4yIDIxLjQwMDQgMjg0IDIxLjEwMDRDMjgzLjggMjAuOTAwNCAyODMuNSAyMC43MDA0IDI4My4yIDIwLjYwMDRDMjgyLjkgMjAuNDAwNCAyODIuNCAyMC40MDA0IDI4MS45IDIwLjQwMDRIMjc5VjIwLjMwMDRaTTI4MC4xIDIxLjIwMDRIMjgxLjZDMjgxLjggMjEuMjAwNCAyODIgMjEuMjAwNCAyODIuMiAyMS4zMDA0QzI4Mi40IDIxLjMwMDQgMjgyLjYgMjEuNDAwNCAyODIuOCAyMS41MDA0QzI4MyAyMS42MDA0IDI4My4xIDIxLjcwMDQgMjgzLjIgMjEuODAwNEMyODMuMyAyMi4wMDA0IDI4My40IDIyLjEwMDQgMjgzLjQgMjIuNDAwNEMyODMuNCAyMi42MDA0IDI4My40IDIyLjkwMDQgMjgzLjIgMjMuMDAwNEMyODMgMjMuMTAwNCAyODMgMjMuMzAwNCAyODIuOCAyMy40MDA0QzI4Mi42IDIzLjUwMDQgMjgyLjQgMjMuNTAwNCAyODIuMiAyMy42MDA0QzI4MiAyMy43MDA0IDI4MS44IDIzLjcwMDQgMjgxLjYgMjMuNzAwNEgyODAuMVYyMS4yMDA0WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MTM4OF8xMjA2OTciPgo8cmVjdCB3aWR0aD0iMjg4LjYiIGhlaWdodD0iODQuMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" alt="" srcset=""></a>
        <a id="black-color" href="">Products</a>
        <a id="black-color" href="">Company</a>
        <a id="black-color" href="">Pricing</a>
        
    </div>
    <div class="second-nav">
        <a id="hide" href=""><button id='black-color'>Sign in</button></a>
        <a id="hide" href=""><button id='blue-color'>Start free trail</button></a>
        <button class="option-btn-2" id="m-hide"><i class="fa-solid fa-grip-lines fa-2xl"></i></button>
    </div>`
    }
    if (window.scrollY < 257) {
        Header.style.backgroundColor = '#146eb4'
        Header.style.boxShadow = 'none'

        Header.innerHTML = `<div  class="first-nav">
        <a href=""><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyODguNiA4NC4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODguNiA4NC4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe29wYWNpdHk6MC4zO2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzMS4xLDIwLjdWNTljMCwwLjktMC41LDEuNC0xLjQsMS40aC00LjhjLTAuOSwwLTEuNC0wLjUtMS40LTEuNFY1N2MtMi4xLDIuNy01LjIsNC4zLTkuNSw0LjMKCQkJYy03LjgsMC0xNC4zLTYuNy0xNC4zLTE1LjVzNi41LTE1LjUsMTQuMy0xNS41YzQuMywwLDcuNCwxLjYsOS41LDQuM1YyMC43YzAtMC45LDAuNS0xLjQsMS40LTEuNGg0LjgKCQkJQzEzMC42LDE5LjMsMTMxLjEsMTkuOCwxMzEuMSwyMC43eiBNMTIzLjUsNDUuN2MwLTQuOS0zLjUtOC4zLTguMS04LjNjLTQuNywwLTguMSwzLjQtOC4xLDguM3MzLjUsOC4zLDguMSw4LjMKCQkJQzEyMCw1NCwxMjMuNSw1MC43LDEyMy41LDQ1Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1OC42LDMxYzAuOSwwLDEuNCwwLjUsMS40LDEuNFY1OWMwLDAuOS0wLjUsMS40LTEuNCwxLjRoLTQuOGMtMC45LDAtMS40LTAuNS0xLjQtMS40di0xLjYKCQkJYy0xLjYsMi41LTQuMywzLjgtOCwzLjhjLTUuNSwwLTkuNi00LjItOS42LTExLjRWMzIuNGMwLTAuOSwwLjUtMS40LDEuNC0xLjRoNC44YzAuOSwwLDEuNCwwLjUsMS40LDEuNHYxNi44YzAsMy40LDIsNSw0LjcsNQoJCQljMywwLDUuMy0xLjcsNS4zLTYuMVYzMi40YzAtMC45LDAuNS0xLjQsMS40LTEuNEgxNTguNkwxNTguNiwzMXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg5LDYwLjRoLTUuNmMtMC43LDAtMS4zLTAuMy0xLjctMC45bC05LjctMTIuNFY1OWMwLDAuOS0wLjUsMS40LTEuNCwxLjRoLTQuOGMtMC45LDAtMS40LTAuNS0xLjQtMS40VjIwLjcKCQkJYzAtMC45LDAuNS0xLjQsMS40LTEuNGg0LjhjMC45LDAsMS40LDAuNSwxLjQsMS40VjQ0bDkuMS0xMi4xYzAuNC0wLjYsMS0wLjksMS43LTAuOWg1LjZjMS4xLDAsMS41LDAuOCwwLjgsMS43bC05LjksMTIuOQoJCQlsMTAuNCwxMy4yQzE5MC42LDU5LjcsMTkwLjIsNjAuNCwxODksNjAuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA0LjYsMzAuMmM2LjUsMCwxMiwzLjksMTIsMTEuNVY1OWMwLDAuOS0wLjUsMS40LTEuNCwxLjRoLTQuNmMtMC45LDAtMS40LTAuNS0xLjQtMS40di0xLjEKCQkJYy0xLjcsMi4xLTQuMiwzLjMtOCwzLjNjLTUuMiwwLTkuOS0zLjEtOS45LTkuMmMwLTYuMiw0LjctOS4yLDkuOS05LjJjMy43LDAsNi4zLDEuMSw4LDIuNnYtMy4xYzAtMy41LTEuOC00LjktNC42LTQuOQoJCQljLTIuMiwwLTMuOSwwLjktNC40LDIuNWMtMC4zLDAuOC0wLjYsMS4yLTEuNSwxLjJoLTQuN2MtMC45LDAtMS41LTAuNS0xLjQtMS41QzE5My41LDMzLjYsMTk4LjYsMzAuMiwyMDQuNiwzMC4yTDIwNC42LDMwLjJ6CgkJCSBNMjA5LjIsNTJjMC0yLjMtMi4xLTMuNy01LjQtMy43Yy0zLjMsMC00LjksMS41LTQuOSwzLjdzMS42LDMuNyw0LjksMy43QzIwNy4xLDU1LjYsMjA5LjIsNTQuMSwyMDkuMiw1MnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMzLjQsMzAuMmM2LjUsMCwxMiwzLjksMTIsMTEuNVY1OWMwLDAuOS0wLjUsMS40LTEuNCwxLjRoLTQuNmMtMC45LDAtMS40LTAuNS0xLjQtMS40di0xLjEKCQkJYy0xLjcsMi4xLTQuMiwzLjMtOCwzLjNjLTUuMiwwLTkuOS0zLjEtOS45LTkuMmMwLTYuMiw0LjctOS4yLDkuOS05LjJjMy43LDAsNi4zLDEuMSw4LDIuNnYtMy4xYzAtMy41LTEuOC00LjktNC42LTQuOQoJCQljLTIuMiwwLTMuOSwwLjktNC40LDIuNWMtMC4zLDAuOC0wLjYsMS4yLTEuNSwxLjJoLTQuN2MtMC45LDAtMS41LTAuNS0xLjQtMS41QzIyMi4yLDMzLjYsMjI3LjQsMzAuMiwyMzMuNCwzMC4yTDIzMy40LDMwLjJ6CgkJCSBNMjM3LjksNTJjMC0yLjMtMi4xLTMuNy01LjQtMy43Yy0zLjMsMC00LjksMS41LTQuOSwzLjdzMS42LDMuNyw0LjksMy43QzIzNS45LDU1LjYsMjM3LjksNTQuMSwyMzcuOSw1MnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjY0LjgsMzAuMmM1LjUsMCw5LjYsNC4yLDkuNiwxMS40VjU5YzAsMC45LTAuNSwxLjQtMS40LDEuNGgtNC44Yy0wLjksMC0xLjQtMC41LTEuNC0xLjRWNDIuMgoJCQljMC0zLjQtMi01LTQuNy01Yy0zLDAtNS4zLDEuNy01LjMsNi4xVjU5YzAsMC45LTAuNSwxLjQtMS40LDEuNGgtNC44Yy0wLjksMC0xLjQtMC41LTEuNC0xLjRWMzIuNGMwLTAuOSwwLjUtMS40LDEuNC0xLjRoNC44CgkJCWMwLjksMCwxLjQsMC41LDEuNCwxLjR2MS42QzI1OC40LDMxLjYsMjYxLjEsMzAuMiwyNjQuOCwzMC4yTDI2NC44LDMwLjJ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI0Mi4xIiBjeT0iNDIuMSIgcj0iNDIuMSIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OC43LDIwSDI1LjVjLTMuMiwwLTUuOCwyLjYtNS44LDUuOHYzMi41YzAsMy4yLDIuNiw1LjgsNS44LDUuOGgzMy4yYzMuMiwwLDUuOC0yLjYsNS44LTUuOFYyNS44CgkJCUM2NC41LDIyLjYsNjEuOSwyMCw1OC43LDIweiBNNDIuMSw0NS45Yy04LjIsMC0xNS02LjQtMTUuNy0xNC41Yy0wLjEtMC45LDAuMi0xLjcsMC44LTIuM2MwLjYtMC42LDEuMy0xLDIuMi0xLjEKCQkJYzAuOC0wLjEsMS43LDAuMiwyLjMsMC43YzAuNywwLjYsMSwxLjMsMS4xLDIuMmMwLjQsNC44LDQuNCw4LjYsOS4zLDguNmM0LjgsMCw4LjktMy44LDkuMy04LjZjMC4xLTEuNywxLjctMywzLjQtMi45CgkJCWMwLjksMC4xLDEuNiwwLjUsMi4yLDEuMWMwLjYsMC42LDAuOCwxLjUsMC44LDIuM0M1Ny4xLDM5LjUsNTAuMiw0NS45LDQyLjEsNDUuOXoiLz4KCTwvZz4KCTxnIGlkPSJzdXJmYWNlMSI+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4MS4yLDE2LjRjLTQsMC03LjMsMy4zLTcuMyw3LjNzMy4zLDcuMyw3LjMsNy4zYzQsMCw3LjMtMy4zLDcuMy03LjNTMjg1LjMsMTYuNCwyODEuMiwxNi40eiBNMjgxLjIsMTcuNQoJCQljMy40LDAsNi4yLDIuOCw2LjIsNi4ycy0yLjgsNi4yLTYuMiw2LjJjLTMuNCwwLTYuMi0yLjgtNi4yLTYuMlMyNzcuOCwxNy41LDI4MS4yLDE3LjV6IE0yNzksMjAuM3Y2LjhoMS4xdi0yLjVoMS41bDEuNiwyLjVoMS4xCgkJCWwtMS42LTIuNmMwLjIsMCwwLjQtMC4xLDAuNS0wLjFjMC4zLTAuMSwwLjYtMC4zLDAuOC0wLjVjMC4yLTAuMiwwLjMtMC40LDAuNC0wLjdjMC4xLTAuMiwwLjEtMC41LDAuMS0wLjdjMC0wLjIsMC0wLjUtMC4xLTAuNwoJCQljLTAuMS0wLjItMC4yLTAuNC0wLjQtMC43Yy0wLjItMC4yLTAuNS0wLjQtMC44LTAuNWMtMC4zLTAuMi0wLjgtMC4yLTEuMy0wLjJIMjc5eiBNMjgwLjEsMjEuMmgxLjVjMC4yLDAsMC40LDAsMC42LDAuMQoJCQljMC4yLDAsMC40LDAuMSwwLjYsMC4yYzAuMiwwLjEsMC4zLDAuMiwwLjQsMC4zYzAuMSwwLjIsMC4yLDAuMywwLjIsMC42YzAsMC4yLDAsMC41LTAuMiwwLjZzLTAuMiwwLjMtMC40LDAuNAoJCQljLTAuMiwwLjEtMC40LDAuMS0wLjYsMC4yYy0wLjIsMC4xLTAuNCwwLjEtMC42LDAuMWgtMS41VjIxLjJ6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==" alt="" srcset=""></a>
        <a id="hide" href="">Products</a>
        <a id="hide" href="">Company</a>
        <a id="hide" href="">Pricing</a>
        
    </div>
    <div class="second-nav">
        <a id="hide" href=""><button>Sign in</button></a>
        <a id="hide" href=""><button>Start free trail</button></a>
        <button class="option-btn" id="m-hide"><i class="fa-solid fa-grip-lines fa-2xl"></i></button>
    </div>`
    } else {
        return;
    }
};
