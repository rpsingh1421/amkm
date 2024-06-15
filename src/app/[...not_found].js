// src/app/[...not_found].js

// export async function generateStaticParams() {
//   // Return an array of parameters for dynamic routes.
//   // For example, if you have dynamic routes for not found pages, you can return an empty array.
//   return [];
// }

import {notFound} from "next/navigation"

export default function NotFoundCatchAll() {
  notFound()
}
