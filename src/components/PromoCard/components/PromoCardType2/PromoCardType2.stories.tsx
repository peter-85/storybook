import type { Meta, StoryObj } from "@storybook/react";
import PromoCardType2 from "./PromoCardType2";
import { TennisBallIcon } from "@storybookConfig/components/Icons/TennisBall";
import { fn } from "@storybook/test";

const meta = {
  title: "Design System/Atoms/Promo Card/Type 2",
  component: PromoCardType2,
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
    footerIcon: {
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
    footerIcon: <TennisBallIcon />,
    onClick: fn(),
  },
} satisfies Meta<typeof PromoCardType2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
