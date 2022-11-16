function Page({ stars }) {
  return <div>Next stars: {stars}</div>
}

export async function getServerSideProps (ctx) {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { props: {stars: json.stargazers_count} }
}

export default Page