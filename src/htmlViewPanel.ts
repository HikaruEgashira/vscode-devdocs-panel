export default (url: string) => {
  const html = `
<style>
body { margin: 0; background-color: #121212; }
iframe{ position: fixed; top: 0; left: 0 }
</style>
<iframe id="elem" width="100%"" height="100%" src=${url} frameborder="0" scrolling="yes"></iframe>
`
  return html
}
