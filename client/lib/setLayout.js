export default function setLayout(Component, Layout) {
  Component.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
  }
}