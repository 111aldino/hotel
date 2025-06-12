import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers

{
  "rafce": {
    "prefix": "rafce",
    "body": [
      "import React from 'react'",
      "",
      "const $1 = React.forwardRef(($2, ref) => {",
      "  return (",
      "    <div>",
      "      {/* Your component code here */}",
      "    </div>",
      "  )",
      "});",
      "",
      "$1.displayName = '$1'",
      "",
      "export default $1"
    ],
    "description": "React functional component with export default"
  }
}