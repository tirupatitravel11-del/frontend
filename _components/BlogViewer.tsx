"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "@tiptap/extension-image";
import { Heading1Icon, Highlighter, ImageIcon, List, ListOrdered, TextSelect } from "lucide-react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle, FontSize } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import TextAlign from '@tiptap/extension-text-align'

import Highlight from "@tiptap/extension-highlight";
// import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import Link from '@tiptap/extension-link'

const BlogViewer = ({ content }: any) => {
  console.log(content)
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const editor = useEditor(
    {
      extensions: [
        StarterKit.configure({
          bulletList: {
            HTMLAttributes: {
              class: "ml-10 list-disc",
            },
          },
          orderedList: {
            HTMLAttributes: {
              class: "ml-10 list-decimal",
            },
          },
        }),
           Link.configure({
      autolink: true,
      linkOnPaste: true,
      openOnClick: true,
    }),

        TextStyle,
        FontSize,
        Color,
        Highlight,
        ImageResize,
        // ListItem,
        // BulletList,
        // OrderedList,

        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),



        //  IndentExtension.configure({
        //   types: ["listItem"],
        // }),

        Image,
      ], content,
      editable: false,
      immediatelyRender: false, // ✅ important
    },
    [content]
  );

  if (!isClient || !editor) return null;

  return <EditorContent editor={editor} />;
};

export default BlogViewer;