import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData();
  console.log('🚀 ~ Github ~ data:', data);
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github Avatar" width="300" />
      </div>
    </>
  );
}

export const loadGithubData = async () => {
  const response = await fetch('https://api.github.com/users/bhanudatsinhjhala');
  return response.json();
};
