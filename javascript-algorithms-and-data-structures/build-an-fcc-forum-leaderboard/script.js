const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};
const postsContainer = document.getElementById("posts-container");

const timeAgo = (timeArg) => {
  const now = Date.now();
  const diff = now - Date.parse(timeArg);

  const minutes = Math.trunc(diff/1000/60);
  const hours = Math.trunc(minutes/60);
  const days = Math.trunc(hours/24);

  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

const viewCount = (views) => {
  const viewsRounded = Math.floor(views/1000)
  if (views >= 1000) return `${viewsRounded}k`;
  return views
}

const forumCategory = (id) => {
  
  if (allCategories.hasOwnProperty(id)) {
    const { category, className} = allCategories[id];
    return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
  }

  return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
}

const avatars = (posters, users) => {
  return posters.map((poster) => {
    const user = users.find((user) => user.id === poster.user_id);

    let avatarPoster = user.avatar_template.replace(/{size}/, 30);

    const src = avatarPoster.startsWith("http")
      ? avatarPoster
      : avatarUrl + avatarPoster;

    return `<img src="${src}" alt="${user.name}">`;
  }).join("");
};

const showLatestPosts = (data) => {
  const posts = [];
  const {users, topic_list} = data;
  const {topics} = topic_list;

  topics.forEach((topic) => {
    const {id, title, views, posts_count, slug, posters, category_id, bumped_at} = topic;
    const trItem =
      `<tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>${forumCategory(category_id)}
          </td>
        <td>
          <div class="avatar-container">${avatars(posters, users)}</div>
        </td>
        <td>
          ${posts_count - 1}
        </td>
        <td>
          ${viewCount(views)}
        </td>
        <td>
          ${timeAgo(bumped_at)}
        </td>
      </tr>`;
      posts.push(trItem);
    
  });
  return postsContainer.innerHTML = posts.join("");
}

async function fetchData() {
 try {
   let response = await fetch(forumLatest);
   let data = await response.json();
   showLatestPosts(data);
   console.log(data);
 } catch (error) {
   console.log("Error:", error);
 }
}
fetchData()