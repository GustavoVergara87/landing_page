type Props =
  {
    title: string;
    link: string;
    description: string;
    appliedTechnologies: string;
    ides: string;
  };

export const ProjectCard =
  ({
    title,
    link,
    description,
    appliedTechnologies,
    ides,
  }: Props) => {
    return (
      <article className="mt-[1.2rem]">
        <ul>
          <li className="text-title list-disc list-inside">
            {title}
          </li>
        </ul>
        {link.length > 0 &&

          <a href={link} className="text-title text-sm">{link}</a>
        }

        <p className="text-black-core">{description}</p>
        <p><span className="text-gray-core mr-2">Applied technologies:</span>{appliedTechnologies}</p>
        <p><span className="text-gray-core mr-2">IDE(s):</span>{ides}</p>
      </article>
    );
  };
