import type { Meta, StoryObj } from "@storybook/react";
import PromoCardType3 from "./PromoCardType3";
import { TennisBallIcon } from "@storybookConfig/components/Icons/TennisBall";
import { fn } from "@storybook/test";

const meta = {
  title: "Design System/Atoms/Promo Card/Type 3",
  component: PromoCardType3,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#3A2856",
          padding: "100px",
          width: "385px",
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
    imageSource: {
      options: [
        "",
        "https://smbgcdn.kubdev.com/cdn-cgi/image/fit=cover,width=770,height=432,,format=auto/common-content/promotions/clay_banner.jpg",
      ],
      control: { type: "select" },
    },
  },
  args: {
    title: "Promo card Title",
    description: "Promo card description",
    buttonText: "See more",
    dateDifference: { days: 15, hours: 5, minutes: 22, seconds: 11 },
    timeAbbreviations: { day: "d", hour: "h", minute: "m" },
    imageSource: "",
    footerIcon: <TennisBallIcon />,
    onClick: fn(),
  },
} satisfies Meta<typeof PromoCardType3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
