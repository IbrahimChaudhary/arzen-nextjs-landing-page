import type { TeamMember, AvatarAccent } from "@/app/data/team";

interface TeamCardProps {
  member: TeamMember;
}

const ACCENT_CLASSES: Record<AvatarAccent, string> = {
  green: "border-[#2f6e33] bg-[#0f1f10] text-[#5fbf5a]",
  pink: "border-[#6e2f50] bg-[#1f0f18] text-[#e07a9e]",
  orange: "border-[#6e4a2f] bg-[#1f150f] text-[#d98a4a]",
};

/**
 * One team member: avatar (initials), name, role, bio.
 */
export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="px-6 py-8">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full border text-xs font-semibold ${ACCENT_CLASSES[member.accent]}`}
      >
        {member.initials}
      </div>

      <h3 className="mt-6 font-display text-xl font-bold text-white">
        {member.name}
      </h3>
      <p className="font-body font-extralight text-[10px] leading-[13px] text-default">{member.role}</p>

      <p className="mt-5 text-sm leading-[1.6] text-[#9a9a9a]">{member.bio}</p>
    </div>
  );
}
