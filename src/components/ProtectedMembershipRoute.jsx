import MembershipRequired from "./MembershipRequired";

export default function ProtectedMembershipRoute({ children }) {
  const savedUser = localStorage.getItem("user");

  if (!savedUser) {
    return <MembershipRequired />;
  }

  const user = JSON.parse(savedUser);

  const hasMembership =
    user.isActive === true && user.membershipStatus === "active";

  if (!hasMembership) {
    return <MembershipRequired />;
  }

  return children;
}
