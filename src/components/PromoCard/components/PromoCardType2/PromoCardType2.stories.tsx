import type { Meta, StoryObj } from "@storybook/react";
import PromoCard from "./PromoCardType2";
import { fn } from "@storybook/test";

const meta = {
  title: "Design System/Atoms/PromoCard",
  component: PromoCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#5C5D5E",
          padding: "100px",
          width: "300px",
        }}
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onClick: {
      control: false,
    },
  },
  args: {
    title: "Promo card title",
    imageTitle: "Image title",
    imageSource:
      "https://wbbgcdn.kubdev.com/cdn-cgi/image/fit=cover,width=572,height=572,,format=auto/common-content/promotions/10.jpg",
    description: "Promo card description",
    buttonText: "See more",
    dateDifference: { days: 15, hours: 5, minutes: 22, seconds: 11 },
    timeAbbreviations: { day: "d", hour: "h", minute: "m" },
    footerIcon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='16'
        viewBox='0 0 50 50'
        width='16'
      >
        <g fill='#d3ef30'>
          <path d='m50 25a25 25 0 0 0 -25-25 25 25 0 0 1 25 25z' />
          <path d='m25 0a25 25 0 0 0 -25 25 25 25 0 0 1 25-25z' />
          <path d='m6.69 24.9a15.27 15.27 0 0 0 5.62 11.39 16 16 0 0 0 12.78 3.24 15.9 15.9 0 0 0 7.81-4.05 29.56 29.56 0 0 0 3.93-4.36 16.06 16.06 0 0 0 2.24-15.43 15.09 15.09 0 0 0 -13.66-9.46 13.66 13.66 0 0 1 -9.86-2.7 23.56 23.56 0 0 0 -11.7 11.32 13.55 13.55 0 0 1 2.84 10.05z' />
          <path d='m25 1.53a23.21 23.21 0 0 0 -7.44 1.22 12.17 12.17 0 0 0 7.78 1.69h.1a16.84 16.84 0 0 1 15.28 10.56 17.87 17.87 0 0 1 -2.44 17.16 31.76 31.76 0 0 1 -4.18 4.64 17.65 17.65 0 0 1 -8.7 4.47 17.3 17.3 0 0 1 -3.14.28 17.67 17.67 0 0 1 -11.07-3.87 17 17 0 0 1 -6.28-12.75v-.1a12 12 0 0 0 -1.91-8.08 23.47 23.47 0 0 0 22 31.72 23.47 23.47 0 0 0 0-46.94z' />
          <path d='m0 25a25 25 0 0 0 25 25 25 25 0 0 1 -25-25z' />
          <path d='m25 50a25 25 0 0 0 25-25 25.07 25.07 0 0 1 -25 25z' />
        </g>
        <path d='m4.91 24.83v.1a17 17 0 0 0 6.28 12.76 17.67 17.67 0 0 0 11.07 3.87 17.3 17.3 0 0 0 3.14-.28 17.65 17.65 0 0 0 8.7-4.47 31.76 31.76 0 0 0 4.18-4.64 17.87 17.87 0 0 0 2.44-17.17 16.84 16.84 0 0 0 -15.28-10.56h-.1a12.17 12.17 0 0 1 -7.78-1.69q-1 .34-2 .78a13.66 13.66 0 0 0 9.86 2.7 15.09 15.09 0 0 1 13.66 9.46 16.06 16.06 0 0 1 -2.24 15.43 29.56 29.56 0 0 1 -3.93 4.36 15.9 15.9 0 0 1 -7.81 4.05 16 16 0 0 1 -12.78-3.24 15.27 15.27 0 0 1 -5.63-11.39 13.55 13.55 0 0 0 -2.84-10c-.3.62-.57 1.26-.81 1.9a12 12 0 0 1 1.87 8.03z' />
        <path d='m50 25a25 25 0 1 0 -25 25 25 25 0 0 0 25-25zm-25 23.47a23.47 23.47 0 0 1 -22-31.72c.24-.64.51-1.28.81-1.9a23.56 23.56 0 0 1 11.74-11.32q1-.43 2-.78a23.21 23.21 0 0 1 7.45-1.22 23.47 23.47 0 0 1 0 46.94z' />
      </svg>
    ),
    onClick: fn(),
  },
} satisfies Meta<typeof PromoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
export type TimeData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  status?: string;
};

export type TimeAbbreviation = {
  day: string;
  hour?: string;
  minute?: string;
};
