import type { Meta, StoryObj } from "@storybook/react";
import PromoCardType1 from "./PromoCardType1";
import { TennisBallIcon } from "@storybookConfig/components/Icons/TennisBall";
import { fn } from "@storybook/test";

const meta = {
  title: "Design System/Atoms/Promo Card/Type 1",
  component: PromoCardType1,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#2F2F2F",
          padding: "100px",
          width: "300px",
        }}
      >
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
    title: "Promo card Title",
    description: "Promo card description",
    buttonText: "See more",
    dateDifference: { days: 15, hours: 5, minutes: 22, seconds: 11 },
    timeAbbreviations: { day: "d", hour: "h", minute: "m" },
    imageSource:
      "https://wbbgcdn.kubdev.com/cdn-cgi/image/fit=cover,width=572,height=572,,format=auto/common-content/promotions/10.jpg",
    footerIcon: <TennisBallIcon />,
    onClick: fn(),
  },
} satisfies Meta<typeof PromoCardType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
