import type { TinaField } from "tinacms";
export function menus_and_infoFields() {
  return [
    {
      type: "object",
      name: "hours_one",
      label: "Hours One",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "hours",
          label: "Hours",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "hours_two",
      label: "Hours Two",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "string",
          name: "hours",
          label: "Hours",
        },
      ],
    },
    {
      type: "object",
      name: "menus",
      label: "Menus",
      fields: [
        {
          type: "string",
          name: "menu_1_label",
          label: "Menu 1 label",
        },
        {
          type: "image",
          name: "menu_1_file",
          label: "Menu 1 File",
        },
        {
          type: "string",
          name: "menu_2_label",
          label: "Menu 2 Label",
        },
        {
          type: "image",
          name: "menu_2_file",
          label: "Menu 2 File",
        },
        {
          type: "string",
          name: "menu_3_label",
          label: "Menu 3 Label",
        },
        {
          type: "image",
          name: "menu_3_file",
          label: "Menu 3 File",
        },
        {
          type: "string",
          name: "menu_4_label",
          label: "Menu 4 Label",
        },
        {
          type: "image",
          name: "menu_4_file",
          label: "Menu 4 File",
        },
      ],
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
  ] as TinaField[];
}
