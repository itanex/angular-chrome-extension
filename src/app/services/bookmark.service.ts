import { Injectable } from '@angular/core';
// import {} from @c

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor() { }
  
//   async function initPopupWindow() {
//     // let bookmarks =
//     chrome.bookmarks.getTree((results: chrome.bookmarks.BookmarkTreeNode[]) => {
//         const bookmarks = results[0];

//         console.log(bookmarks)

//         let branch = createUL();
//         branch.append(createLI(bookmarks))

//         tree.append(branch);
//     })

//     function createLI(node: chrome.bookmarks.BookmarkTreeNode): HTMLLIElement {
//         const leaf = document.createElement('li');

//         if (node.url) {
//             const link = document.createElement('a');
//             link.href = node.url;
//             link.target = '_blank';
//             link.innerText = node.title;

//             leaf.append(link);
//         }
//         else {
//             leaf.innerText = node.title || 'no title';
//         }

//         if (node.children) {
//             const branch = createUL();
//             node.children.map(child => {
//                 branch.append(createLI(child));
//             })
//             leaf.append(branch);
//         }

//         return leaf;
//     }

//     function createUL(): HTMLUListElement {
//         const root = document.createElement('ul');

//         return root;
//     }
//     // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     // if (tab?.url) {
//     //     try {
//     //         let url = new URL(tab.url);
//     //         input.value = url.hostname;
//     //     } catch { }
//     // }

//     // input.focus();
// };

}
