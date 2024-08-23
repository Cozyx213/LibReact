import axios from "axios";
import { useEffect, useState } from "react";
import getTime from "./helper";
const url = "https://icanhazdadjoke.com";

const url2 = "https://api.open-meteo.com/v1/forecast";
const parameters = {
  latitude: 9.8794,
  longitude: 123.5956,
  current_weather: true,
  hourly: "temperature_2m,relative_humidity_2m,rain",
  timezone: "auto",
};
// Convert all values to strings
const stringifiedParams: Record<string, string> = Object.fromEntries(
  Object.entries(parameters).map(([key, value]) => [key, String(value)])
);

const queryString = new URLSearchParams(stringifiedParams).toString();
const weatherUrl = `${url2}?${queryString}`;

const Temperature: React.FC = () => {
  const [data, setData] = useState<any>(null);
  var [color, setColor] = useState<String>("text-red-600");
  const fetchTemp = async () => {
    try {
      const response = await axios(weatherUrl, {
        headers: {
          Accept: "application/json",
        },
      });
      const temp = response.data.current_weather.temperature;
      setData(temp);
      if (temp > 33) {
        setColor("text-red-600");
      } else if (temp > 30) {
        setColor("text-orange-600");
      } else {
        setColor("text-green-600");
      }
    } catch (error: any) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchTemp();
  }, []);
  console.log(data);

  return (
    <div className={`${color} flex items-center`}>
      {data !== null ? (
        <>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 8 16"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              className=""
              d="M3.83315 0.393494C5.12261 0.393494 6.17634 1.40276 6.24748 2.67434L6.25131 2.81155L6.25205 8.72831L6.3116 8.7796C7.00023 9.39461 7.44042 10.246 7.53447 11.1776L7.54863 11.365L7.55339 11.5542C7.55339 13.6088 5.88778 15.2744 3.83315 15.2744C1.77852 15.2744 0.112915 13.6088 0.112915 11.5542C0.112915 10.5403 0.521843 9.59401 1.22097 8.90508L1.35543 8.77896L1.41425 8.72831L1.415 2.81165C1.415 1.56824 2.35346 0.544027 3.56072 0.408669L3.69593 0.397322L3.83315 0.393494ZM3.83315 1.50956C3.14999 1.50956 2.58971 2.03569 2.53539 2.70488L2.53107 2.81168L2.53073 9.28076L2.30137 9.44791C1.63215 9.93561 1.22899 10.7107 1.22899 11.5542C1.22899 12.9924 2.39491 14.1584 3.83315 14.1584C5.27139 14.1584 6.43732 12.9924 6.43732 11.5542C6.43732 10.7637 6.0832 10.0332 5.48781 9.54312L5.36555 9.44836L5.13635 9.28123L5.13524 2.81165C5.13524 2.09253 4.55227 1.50956 3.83315 1.50956ZM3.83315 4.85778C4.14135 4.85778 4.39119 5.10762 4.39119 5.41581L4.39161 9.77938C5.14606 10.0165 5.69327 10.7215 5.69327 11.5542C5.69327 12.5815 4.86047 13.4143 3.83315 13.4143C2.80584 13.4143 1.97303 12.5815 1.97303 11.5542C1.97303 10.7212 2.5206 10.0161 3.27543 9.77915L3.27512 5.41581C3.27512 5.10762 3.52496 4.85778 3.83315 4.85778Z"
              fill="currentColor"
            >
              <path
                d="M3.83315 0.393494C5.12261 0.393494 6.17634 1.40276 6.24748 2.67434L6.25131 2.81155L6.25205 8.72831L6.3116 8.7796C7.00023 9.39461 7.44042 10.246 7.53447 11.1776L7.54863 11.365L7.55339 11.5542C7.55339 13.6088 5.88778 15.2744 3.83315 15.2744C1.77852 15.2744 0.112915 13.6088 0.112915 11.5542C0.112915 10.5403 0.521843 9.59401 1.22097 8.90508L1.35543 8.77896L1.41425 8.72831L1.415 2.81165C1.415 1.56824 2.35346 0.544027 3.56072 0.408669L3.69593 0.397322L3.83315 0.393494ZM3.83315 1.50956C3.14999 1.50956 2.58971 2.03569 2.53539 2.70488L2.53107 2.81168L2.53073 9.28076L2.30137 9.44791C1.63215 9.93561 1.22899 10.7107 1.22899 11.5542C1.22899 12.9924 2.39491 14.1584 3.83315 14.1584C5.27139 14.1584 6.43732 12.9924 6.43732 11.5542C6.43732 10.7637 6.0832 10.0332 5.48781 9.54312L5.36555 9.44836L5.13635 9.28123L5.13524 2.81165C5.13524 2.09253 4.55227 1.50956 3.83315 1.50956ZM3.83315 4.85778C4.14135 4.85778 4.39119 5.10762 4.39119 5.41581L4.39161 9.77938C5.14606 10.0165 5.69327 10.7215 5.69327 11.5542C5.69327 12.5815 4.86047 13.4143 3.83315 13.4143C2.80584 13.4143 1.97303 12.5815 1.97303 11.5542C1.97303 10.7212 2.5206 10.0161 3.27543 9.77915L3.27512 5.41581C3.27512 5.10762 3.52496 4.85778 3.83315 4.85778Z"
                fill="currentColor"
              />
            </path>
          </svg>
          <div>{data}°C</div>
        </>
      ) : (
        <div>No temp Data</div>
      )}
    </div>
  );
};
interface Post {
  id: number;
  created_at: "string";
  slug: string;
  title: string;
  description: string;
  author: {
    username: string;
  };
}
function NewsComponent(Post: Post) {
  const { id, title, created_at, slug, description, author } = Post;
  return (
    <a href="/post_detail/${content.slug}">
      <article className="overflow-hidden floored-lg shadow transition hover:shadow-lg mx-2 my-2 p-2">
        <time className="block text-xs text-gray-500">
          {getTime(created_at)}
        </time>
        <h1>{title}</h1>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
        <div className="flex justify-center">
          <div className="justify-center group inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Read more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </div>{" "}
        </div>
      </article>
    </a>
  );
}

export function Post() {
  const url = "https://anhslink.pythonanywhere.com/fetch/";
  const [post, setPost] = useState<Post[]>([]);
  async function getPost() {
    try {
      const response = await axios(url);
      setPost(response.data.posts);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {post.map((Post: Post) => (
        <NewsComponent {...Post} />
      ))}
    </div>
  );
}

export default Temperature;
