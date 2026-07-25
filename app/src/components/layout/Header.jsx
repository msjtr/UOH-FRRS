import {
  Button,
  Avatar,
  Text,
} from "@fluentui/react-components";

import {
  Navigation24Regular,
  Alert24Regular,
} from "@fluentui/react-icons";

import "../../assets/styles/header.css";

export default function Header({ collapsed, onToggle }) {
  return (
    <header className="app-header">

      <div className="header-right">

        <Button
          appearance="subtle"
          icon={<Navigation24Regular />}
          onClick={onToggle}
        />

        <div>
          <Text
            size={500}
            weight="semibold"
          >
            نظام جاهزية المرافق
          </Text>

          <div className="header-subtitle">
            كلية الشريعة والقانون
          </div>
        </div>

      </div>

      <div className="header-left">

        <Button
          appearance="subtle"
          icon={<Alert24Regular />}
        />

        <Avatar
          name="محمد الشمري"
          size={40}
        />

      </div>

    </header>
  );
}
