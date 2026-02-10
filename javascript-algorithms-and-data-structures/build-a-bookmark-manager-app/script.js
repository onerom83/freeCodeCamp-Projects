
let bookmarksData = JSON.parse(localStorage.getItem("bookmarks")) || []; 

const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const nameBookmark = document.getElementById("name");
const urlBookmark = document.getElementById("url");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const categoryNameList = document.querySelector("#bookmark-list-section .category-name");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {
  try {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    let allValid;
    bookmarks.forEach((bookmark) => {
      let hasName = Object.hasOwn(bookmark, "name");
      let hasCategory = Object.hasOwn(bookmark, "category");
      let hasURL = Object.hasOwn(bookmark, "url");
      if (hasName && hasCategory && hasURL) {
        allValid = true;
      } else {
        allValid = false;
      };
    });
    return allValid ? bookmarks : [];
  } catch(error) {
    return [];
  };
}

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}
const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}
const reset = () => {
  nameBookmark.value = "";
  urlBookmark.value = "";
  categoryDropdown.value = "News";
}

const viewItemsCategory = () => {
  const selectedText = categoryDropdown.value; 
  document.querySelectorAll(".category-name").forEach(el => el.innerText = selectedText);
  
  const categorySel = categoryDropdown.value;
  const bookmarksCategory = getBookmarks().filter((el) => el.category === categorySel);
  
  categoryList.innerHTML = "";
  if (bookmarksCategory.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    bookmarksCategory.forEach((item) => {
      categoryList.innerHTML += `
        <li>
          <input type="radio" id="${item.name}" value="${item.name}" name="allBookmarksCategory">
          <label for="${item.name}">
            <a href="${item.url}">${item.name}</a>
          </label>
        </li>`;
    });
  }
};

addBookmarkBtn.addEventListener("click", () => {
  document.querySelectorAll(".category-name").forEach(el => el.innerText = categoryDropdown.value);
  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
    viewItemsCategory();       
    displayOrHideCategory();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener("click", () => {
  const currentBookmarks = getBookmarks();
  const bookmarkObj = {
    name: nameBookmark.value,
    category: categoryDropdown.value,
    url: urlBookmark.value,
  }
  currentBookmarks.push(bookmarkObj);
  localStorage.setItem("bookmarks", JSON.stringify(currentBookmarks));
  bookmarksData = currentBookmarks;
  reset();
  displayOrCloseForm();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector('input[name="allBookmarksCategory"]:checked');
  if (!selectedRadio) return;
  const categorySel = categoryDropdown.value;
  
  let updatedBookmarks = getBookmarks().filter(
    item => !(item.name === selectedRadio.value && item.category === categorySel)
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  bookmarksData = updatedBookmarks;
  viewItemsCategory(); 
});

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});