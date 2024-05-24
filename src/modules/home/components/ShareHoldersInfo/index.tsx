import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	news,
	otherInformation,
	regularInformation,
	reports,
} from '@modules/home/components/ShareHoldersInfo/data';

const ShareHoldersInfo = () => {
	return (
		<SplitBlocks
			title="Для акціонерів і стейкхолдерів"
			titleType="heading"
			anchor="share-holders-info"
		>
			<Accordion title="Звітність">
				<DocumentsList groupList={reports} />
			</Accordion>

			<Accordion title="Новини">
				<DocumentsList list={news} />
			</Accordion>

			<Accordion title="Регулярна інформація">
				<DocumentsList list={regularInformation} />
			</Accordion>

			<Accordion title="Інша інформація">
				<DocumentsList list={otherInformation} />
			</Accordion>
		</SplitBlocks>
	);
};

export default ShareHoldersInfo;
