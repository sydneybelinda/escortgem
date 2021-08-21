-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.24 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table escortgem.agencies
CREATE TABLE IF NOT EXISTS `agencies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `agencyname` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `profpic` varchar(255) DEFAULT NULL,
  `enabled` varchar(255) DEFAULT NULL,
  `postcode` int DEFAULT NULL,
  `twitterid` varchar(255) DEFAULT NULL,
  `lastEscortId` int DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.agencies: ~0 rows (approximately)
/*!40000 ALTER TABLE `agencies` DISABLE KEYS */;
REPLACE INTO `agencies` (`id`, `username`, `email`, `phone`, `agencyname`, `country`, `state`, `city`, `address`, `description`, `website`, `profpic`, `enabled`, `postcode`, `twitterid`, `lastEscortId`, `updated_at`) VALUES
	(3, 'agency', 'agency@agency.com', '3543646436', 'Test Agency', NULL, NULL, NULL, NULL, 'wbheneneetn', 'https://chicit.com.au/', NULL, NULL, NULL, NULL, 5, NULL);
/*!40000 ALTER TABLE `agencies` ENABLE KEYS */;

-- Dumping structure for table escortgem.cities
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countrycode` text NOT NULL,
  `country` text NOT NULL,
  `state` text NOT NULL,
  `city` text NOT NULL,
  `cityslug` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.cities: ~8 rows (approximately)
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
REPLACE INTO `cities` (`id`, `countrycode`, `country`, `state`, `city`, `cityslug`) VALUES
	(1, 'au', 'Australia', 'NSW', 'Sydney', 'sydney'),
	(2, 'au', 'Australia', 'VIC', 'Melbourne', 'melbourne'),
	(3, 'au', 'Australia', 'QLD', 'Brisbane', 'brisbane'),
	(4, 'au', 'Australia', 'ACT', 'Canberra', 'canberra'),
	(5, 'au', 'Australia', 'WA', 'Perth', 'perth'),
	(6, 'au', 'Australia', 'SA', 'Adelaide', 'adelaide'),
	(7, 'au', 'Australia', 'NT', 'Darwin', 'darwin'),
	(8, 'au', 'Australia', 'TAS', 'Hobart', 'hobart');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;

-- Dumping structure for table escortgem.escorts
CREATE TABLE IF NOT EXISTS `escorts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `availability` varchar(500) DEFAULT NULL,
  `incalls` varchar(30) DEFAULT NULL,
  `outcalls` varchar(30) DEFAULT NULL,
  `age` varchar(3) DEFAULT NULL,
  `nationality` varchar(30) DEFAULT NULL,
  `height` varchar(30) DEFAULT NULL,
  `eyes` varchar(30) DEFAULT NULL,
  `hair` varchar(30) DEFAULT NULL,
  `stats` varchar(30) DEFAULT NULL,
  `dressSize` varchar(5) DEFAULT NULL,
  `sexualOrientation` varchar(30) DEFAULT NULL,
  `languages` varchar(100) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `hobbies` varchar(500) DEFAULT NULL,
  `location` varchar(30) DEFAULT NULL,
  `advertisedPrice` varchar(5) DEFAULT NULL,
  `oneHourIn` varchar(5) DEFAULT NULL,
  `oneAndAHalfHourIn` varchar(5) DEFAULT NULL,
  `twoHourIn` varchar(5) DEFAULT NULL,
  `additionalHourIn` varchar(5) DEFAULT NULL,
  `dinnerIn` varchar(5) DEFAULT NULL,
  `overnightIn` varchar(5) DEFAULT NULL,
  `oneHourOut` varchar(5) DEFAULT NULL,
  `oneAndAHalfHourOut` varchar(5) DEFAULT NULL,
  `twoHourOut` varchar(5) DEFAULT NULL,
  `additionalHourOut` varchar(5) DEFAULT NULL,
  `dinnerOut` varchar(5) DEFAULT NULL,
  `overnightOut` varchar(5) DEFAULT NULL,
  `website` varchar(1000) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `escort` varchar(10) DEFAULT NULL,
  `profpic` varchar(100) DEFAULT NULL,
  `state` varchar(4) DEFAULT NULL,
  `owner` varchar(100) DEFAULT NULL,
  `featured` varchar(5) DEFAULT NULL,
  `monday` varchar(300) DEFAULT NULL,
  `tuesday` varchar(300) DEFAULT NULL,
  `wednesday` varchar(300) DEFAULT NULL,
  `thursday` varchar(300) DEFAULT NULL,
  `friday` varchar(300) DEFAULT NULL,
  `saturday` varchar(300) DEFAULT NULL,
  `sunday` varchar(300) DEFAULT NULL,
  `enabled` varchar(15) DEFAULT NULL,
  `position` int DEFAULT NULL,
  `gender` varchar(30) DEFAULT NULL,
  `chest` varchar(30) DEFAULT NULL,
  `cup` varchar(30) DEFAULT NULL,
  `waist` varchar(30) DEFAULT NULL,
  `hips` varchar(30) DEFAULT NULL,
  `language1` varchar(50) DEFAULT NULL,
  `level1` varchar(50) DEFAULT NULL,
  `language2` varchar(50) DEFAULT NULL,
  `level2` varchar(50) DEFAULT NULL,
  `language3` varchar(50) DEFAULT NULL,
  `level3` varchar(50) DEFAULT NULL,
  `agencyName` varchar(100) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `services` json DEFAULT NULL,
  `otherServiceInfo` varchar(1000) DEFAULT NULL,
  `postcode` int DEFAULT NULL,
  `twitterId` varchar(50) DEFAULT NULL,
  `userRole` varchar(50) DEFAULT NULL,
  `ad1` varchar(50) DEFAULT NULL,
  `otherPricing` varchar(3000) DEFAULT NULL,
  `ad2` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `tempdir` varchar(50) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `views` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.escorts: ~3 rows (approximately)
/*!40000 ALTER TABLE `escorts` DISABLE KEYS */;
REPLACE INTO `escorts` (`id`, `username`, `email`, `firstName`, `lastName`, `city`, `title`, `description`, `availability`, `incalls`, `outcalls`, `age`, `nationality`, `height`, `eyes`, `hair`, `stats`, `dressSize`, `sexualOrientation`, `languages`, `occupation`, `hobbies`, `location`, `advertisedPrice`, `oneHourIn`, `oneAndAHalfHourIn`, `twoHourIn`, `additionalHourIn`, `dinnerIn`, `overnightIn`, `oneHourOut`, `oneAndAHalfHourOut`, `twoHourOut`, `additionalHourOut`, `dinnerOut`, `overnightOut`, `website`, `phone`, `escort`, `profpic`, `state`, `owner`, `featured`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`, `enabled`, `position`, `gender`, `chest`, `cup`, `waist`, `hips`, `language1`, `level1`, `language2`, `level2`, `language3`, `level3`, `agencyName`, `type`, `services`, `otherServiceInfo`, `postcode`, `twitterId`, `userRole`, `ad1`, `otherPricing`, `ad2`, `country`, `tempdir`, `image_name`, `updated_at`, `views`) VALUES
	(1, 'agency-3', 'agency@agency.com', 'Jane', 'Doe', 'sydney', 'ehewtrh', 'srhsrthwrwrtjh\n\ndttykty', NULL, NULL, NULL, '32', 'australian', '5 ft 1 in', 'green', 'blonde', NULL, '', 'bisexual', NULL, NULL, NULL, NULL, '1', '2', '4', '6', '8', '11', '13', '3', '5', '7', '9', '12', '13', 'https://chicit.com.au/', '3543646436', NULL, 'yMx4uTwtdlCkMj4rL0D96H5iC.jpg', 'nsw', 'agency', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'True', NULL, 'female', '36', 'd', '38', '38', 'english', 'native', '', '', '', '', 'Test Agency', 'Agency Escort', '["couples", "deepthroat", "frenchkissing", "cob", "lapdancing", "reverseoral", "parties", "receivinghardsports", "fingering", "facesitting", "receivingwatersports", "givingwatersports", "webcamsex"]', 'aensrnfhndtynm', NULL, 'ttttt', NULL, NULL, '15\naehsrth', NULL, 'australia', NULL, NULL, NULL, 0),
	(2, 'agency-4', 'agency@agency.com', 'Jenny', 'Jones', 'sydney', 'Fun, friendly and Stunning', 'Ashley is a fun friendly and stunning Australian Blonde. She is smart, funny, and a great conversationalist. She is also extremely naughty - she gets pleasure from giving pleasure!\n\nAshley is extremely open-minded and wishes to fulfil all of your desires. She offers many services\nShe also occaisionally likes to party and can be available for party bookings', NULL, NULL, NULL, '27', 'Australian', '5 ft 7 in', 'Blue', 'Blonde', NULL, '8', 'Bisexual', NULL, NULL, NULL, NULL, '600', '600', '900', '1200', '500', '', '', '600', '900', '1200', '500', '1500', '3000', 'https://chicit.com.au/', '3543646436', NULL, 'UR3M4tqY9l208Ca5F8fCwT15t.jpg', 'NSW', 'agency', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'True', NULL, 'Female', '32', 'D', '24', '32', 'English', 'Native', 'German', 'Fluent', 'Vietnamese', 'Still Learning', 'Test Agency', 'Agency Escort', '["cob", "couples", "deepthroat", "domination", "fingering", "footfetish", "frenchkissing", "gfe", "lapdancing", "massage", "oralsex", "owo", "parties", "pse", "reverseoral", "receivingrimming", "roleplay", "sextoys", "uniforms", "cim", "greek"]', 'Greek +$250\n-Light kissing\n-Light touching\n-Cock teasing\n-Mutual masturbation\n-BBBJ\n-COB\n-COF\n-Deep throat with gagging & spitting\n-Vibrating toy show\n-Striptease\n-Pussy fingering\n-Mutual masturbation\n-Oral on me\n-Mutual 69\n-Multiple shots\n-Rimming (on me)\n-Dirty talk\n-Face fucking\n-Intense sex in multiple position\n-Pornography on while we are warming up\n-Sexy lingerie & heels\n-Role play & outfit of your choice.\n\nROLE PLAY OUTFITS INCLUDE:\nslutty secretary, naughty nurse, sexy school girl, frisky french maid, cheeky cheerleader, sexy stripper.\n-multiple positions,\n-Blow job\n-Oral on me\n-COB (Cum on my body)\n-Sexy lingerie & heels\n-Sex', NULL, '', NULL, NULL, 'Greek +$250', NULL, 'Australia', NULL, NULL, NULL, 0),
	(5, 'escort', 'escort@escort.com', 'Sarah', 'Launer', 'sydney', 'ergege3gh', '4h4trj5j', NULL, NULL, NULL, '20', '', '5 ft 6 in', 'Brown', 'Redhead', NULL, '12', 'Bisexual', NULL, NULL, NULL, NULL, '123', '123', '13', '123', '423', '2235', '2555', '123', '123', '2345', '34', '2545', '2534', '', '0497094907', NULL, 'MjKNL6AZDq8iFikmtVq79askC.jpg', 'NSW', 'escort', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'True', NULL, 'Female', '', '', '', '', 'English', 'Native', '', '', '', '', '', 'Independent Escort', '""', '', NULL, '', NULL, NULL, '', NULL, 'Australia', NULL, NULL, NULL, 0),
	(6, 'agency-5', 'agency@agency.com', 'Susan', '', 'sydney', ' Young, naughty, excellent reviews!', 'Alyssa is a stunning 22 year old petite, size 6 Australian Brunette with blue eyes. She is fun, friendly, and extremely naughty. Although she has been escorting for a little while now â€“ She loves what she does so expect a session with Alyssa to be unrehearsed, passionate and raw. She is a lady on the street and a freak in the sheets. A true Sex Buddy experience. She is full of energy like the energizer bunnyâ€¦ Can you wear her out?\n\nAlyssa regularly gets great client feedback and has got outstanding client reviews.\n\nAlyssa is also genuinely bisexual and can be booked for couples and sexy bisexual duos.\n\nRead Alyssa\'s review on Punter Planet -\nhttp://forums.punterplanet.com/topic/116168-late-night-babes-may-2015-alyssa/', NULL, NULL, NULL, '21', 'Australian', '5 ft 0 in', 'Green', 'Redhead', NULL, '10', 'Bisexual', NULL, NULL, NULL, NULL, '100', '100', '200', '300', '500', '', '', '100', '200', '400', '500', '600', '600', 'https://chicit.com.au/', '3543646436', NULL, 'FHeo9qbWyw95vFkLBuPBSIl0O.jpg', 'NSW', 'agency', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'True', NULL, 'Female', '40', 'C', '36', '40', 'English', 'Fluent', '', '', '', '', 'Test Agency', 'Agency Escort', '["lapdancing", "reverseoral", "receivingrimming", "owo", "givinghardsports", "domination", "deepthroat", "frenchkissing", "couples", "parties", "tieandtease", "striptease", "givingrimming", "cim"]', 'Couples +$200', NULL, '', NULL, NULL, 'Couples +$200', NULL, 'Australia', NULL, NULL, NULL, 0),
	(7, 'agency-6', 'agency@agency.com', 'Sam', '', 'sydney', 'Stunning American Blonde', 'Kimber is a sophisticated, sexy and beautiful 25 Year old American Brunette. She has a beautiful smile, tight body, an awesome personality and is very open-minded. Kimber is not only the ultimate sex kitten, she is super fun to talk to and absolute eye candy. No matter what the occasion with Kimber as your companion you will be the envy of many!\n\nKimber is fit, body conscious, loves healthy living and is a devoted yoga fanatic so can bend her body in many ways!\n\nShe comes to you highly recommended with not only great feedback from clients - but is also well reviewed.\n\nKimber is an exceptional escort and one of the nicest people you will ever meet. The photos on this website are actually completely real, recent, and not even professional. They are all amateur images taken by myself - and she looks amazing in those images. She looks even better in person.\n\nKimber is truly an international escort having travelled and worked in many countries. She is currently touring Sydney. She is very popular so to avoid disappointment its recommended you book as soon as you can.\n\nKimber is also genuinely bisexual and is available for ladies, couples, and other LNB ladies.', NULL, NULL, NULL, '21', 'Australian', '5 ft 0 in', 'Green', 'Redhead', NULL, '8', 'Heterosexual', NULL, NULL, NULL, NULL, '1', '2', '4', '6', '8', '10', '12', '3', '5', '7', '9', '11', '13', 'https://chicit.com.au/', '3543646436', NULL, 'SwH2XvIkdFEGTKJGoWRvviPzb.jpg', 'NSW', 'agency', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'True', NULL, 'Female', '32', 'DD', '24', '32', 'English', 'Native', '', '', '', '', 'Test Agency', 'Agency Escort', '["cob", "couples", "domination", "facesitting", "fingering", "fisting", "oralsex", "gfe", "frenchkissing", "owo", "pse", "massage", "greek", "cim", "reverseoral"]', '', NULL, '', NULL, NULL, '', NULL, 'Australia', NULL, NULL, NULL, 0);
/*!40000 ALTER TABLE `escorts` ENABLE KEYS */;

-- Dumping structure for table escortgem.files
CREATE TABLE IF NOT EXISTS `files` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `owner` text,
  `size` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.files: ~28 rows (approximately)
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
REPLACE INTO `files` (`id`, `name`, `owner`, `size`) VALUES
	(23, '0zmtIFCixZKXXUcCtViujVZjh.jpg', 'agency-3', 34643),
	(24, 'NNpBdEUqeAxeRgadrvdTfZXGE.jpg', 'agency-3', 27667),
	(25, 'yMx4uTwtdlCkMj4rL0D96H5iC.jpg', 'agency-3', 34643),
	(26, '85sT6dwVRLAigVFfP0ce0twdk.jpg', 'agency-3', 27667),
	(27, 'Anu4DJVUN3fajHeNKZRBdkWuH.jpg', 'agency-3', 22392),
	(28, 'UR3M4tqY9l208Ca5F8fCwT15t.jpg', 'agency-4', 194319),
	(29, 'bLyYSLe2zuFBSDl5PRv0nMYt5.jpg', 'agency-4', 219144),
	(30, 'T9FJcs6soLMa6EBYyICZvLm8S.jpg', 'agency-4', 206133),
	(31, 'd84eXg6jzX8Xd6i3Fg97gQutJ.jpg', 'agency-4', 146033),
	(32, '8VVlM0AZSZMHRYPq9t4P0Lvgo.jpg', 'agency-4', 173466),
	(33, 'FLw8verTKpOK2h1x2LPfFoFF4.jpg', 'agency-4', 91166),
	(34, 'Qb4MrljoX9SERq6JOiGOWfr4x.jpg', 'escort-1', 206133),
	(35, 'DtCDV4hSDmfQsssRNcIAbFN2j.jpg', 'escort-1', 173466),
	(36, 'xRuOGbHA8VKWmZWhnTnmjpU5J.jpg', 'escort-1', 194319),
	(37, 'RGDrdhpKfGODCaW0GAKcHft5M.jpg', 'escort-1', 146033),
	(38, 'oAjH3YkuzEZrCTvETfY1HHyBu.jpg', 'escort-1', 91166),
	(39, '9cNV3CgB050hcDixRsZbIpMhl.jpg', 'escort-1', 91166),
	(65, 'MjKNL6AZDq8iFikmtVq79askC.jpg', 'escort', 219144),
	(66, 'wNTJLnrr02izf39c7doofZUZB.jpg', 'escort', 173466),
	(67, 'J2QL3gNWeHmCLQZnGJmaxbKG9.jpg', 'escort', 91166),
	(68, 'tbG6uTszHIOzlJaXEH6iNHW5c.jpg', 'agency-5', 206133),
	(69, 'FHeo9qbWyw95vFkLBuPBSIl0O.jpg', 'agency-5', 173466),
	(70, 'DDGoQPDvtGuSKoT4fT8AiQ9fI.jpg', 'agency-5', 146033),
	(71, 'rnuccYj4CVoJQNHp8rX9dJJPJ.jpg', 'agency-5', 91166),
	(72, 'SwH2XvIkdFEGTKJGoWRvviPzb.jpg', 'agency-6', 206133),
	(73, 'EYEFpYfliE2MdaQyg06AwlNTS.jpg', 'agency-6', 219144),
	(74, '5yEkMWn57FdfeLqMXMEJsV5qJ.jpg', 'agency-6', 194319),
	(75, '39HAZgF9O0B7Ru7sktbDiCB3J.jpg', 'agency-6', 173466);
/*!40000 ALTER TABLE `files` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_bust
CREATE TABLE IF NOT EXISTS `select_bust` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_bust: ~8 rows (approximately)
/*!40000 ALTER TABLE `select_bust` DISABLE KEYS */;
REPLACE INTO `select_bust` (`id`, `name`, `description`) VALUES
	(1, 'A', 'A'),
	(2, 'B', 'B'),
	(3, 'C', 'C'),
	(4, 'D', 'D'),
	(5, 'DD', 'DD'),
	(6, 'E', 'E'),
	(7, 'F', 'F'),
	(8, 'G+', 'G+');
/*!40000 ALTER TABLE `select_bust` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_chest_bust_hips
CREATE TABLE IF NOT EXISTS `select_chest_bust_hips` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_chest_bust_hips: ~12 rows (approximately)
/*!40000 ALTER TABLE `select_chest_bust_hips` DISABLE KEYS */;
REPLACE INTO `select_chest_bust_hips` (`id`, `name`, `description`) VALUES
	(1, '24', '24 in'),
	(2, '26', '26 in'),
	(3, '28', '28 in'),
	(4, '30', '30 in'),
	(5, '32', '32 in'),
	(6, '34', '34 in'),
	(7, '36', '36 in'),
	(8, '38', '38 in'),
	(9, '40', '40 in'),
	(10, '42', '42 in'),
	(11, '44', '44 in'),
	(12, '46', '46 in');
/*!40000 ALTER TABLE `select_chest_bust_hips` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_countries
CREATE TABLE IF NOT EXISTS `select_countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=250 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_countries: ~245 rows (approximately)
/*!40000 ALTER TABLE `select_countries` DISABLE KEYS */;
REPLACE INTO `select_countries` (`id`, `name`, `description`) VALUES
	(5, 'AF', 'Afghanistan'),
	(6, 'AL', 'Albania'),
	(7, 'DZ', 'Algeria'),
	(8, 'DS', 'American Samoa'),
	(9, 'AD', 'Andorra'),
	(10, 'AO', 'Angola'),
	(11, 'AI', 'Anguilla'),
	(12, 'AQ', 'Antarctica'),
	(13, 'AG', 'Antigua and Barbuda'),
	(14, 'AR', 'Argentina'),
	(15, 'AM', 'Armenia'),
	(16, 'AW', 'Aruba'),
	(17, 'AU', 'Australia'),
	(18, 'AT', 'Austria'),
	(19, 'AZ', 'Azerbaijan'),
	(20, 'BS', 'Bahamas'),
	(21, 'BH', 'Bahrain'),
	(22, 'BD', 'Bangladesh'),
	(23, 'BB', 'Barbados'),
	(24, 'BY', 'Belarus'),
	(25, 'BE', 'Belgium'),
	(26, 'BZ', 'Belize'),
	(27, 'BJ', 'Benin'),
	(28, 'BM', 'Bermuda'),
	(29, 'BT', 'Bhutan'),
	(30, 'BO', 'Bolivia'),
	(31, 'BA', 'Bosnia and Herzegovina'),
	(32, 'BW', 'Botswana'),
	(33, 'BV', 'Bouvet Island'),
	(34, 'BR', 'Brazil'),
	(35, 'IO', 'British Indian Ocean Territory'),
	(36, 'BN', 'Brunei Darussalam'),
	(37, 'BG', 'Bulgaria'),
	(38, 'BF', 'Burkina Faso'),
	(39, 'BI', 'Burundi'),
	(40, 'KH', 'Cambodia'),
	(41, 'CM', 'Cameroon'),
	(42, 'CA', 'Canada'),
	(43, 'CV', 'Cape Verde'),
	(44, 'KY', 'Cayman Islands'),
	(45, 'CF', 'Central African Republic'),
	(46, 'TD', 'Chad'),
	(47, 'CL', 'Chile'),
	(48, 'CN', 'China'),
	(49, 'CX', 'Christmas Island'),
	(50, 'CC', 'Cocos (Keeling) Islands'),
	(51, 'CO', 'Colombia'),
	(52, 'KM', 'Comoros'),
	(53, 'CG', 'Congo'),
	(54, 'CK', 'Cook Islands'),
	(55, 'CR', 'Costa Rica'),
	(56, 'HR', 'Croatia (Hrvatska)'),
	(57, 'CU', 'Cuba'),
	(58, 'CY', 'Cyprus'),
	(59, 'CZ', 'Czech Republic'),
	(60, 'DK', 'Denmark'),
	(61, 'DJ', 'Djibouti'),
	(62, 'DM', 'Dominica'),
	(63, 'DO', 'Dominican Republic'),
	(64, 'TP', 'East Timor'),
	(65, 'EC', 'Ecuador'),
	(66, 'EG', 'Egypt'),
	(67, 'SV', 'El Salvador'),
	(68, 'GQ', 'Equatorial Guinea'),
	(69, 'ER', 'Eritrea'),
	(70, 'EE', 'Estonia'),
	(71, 'ET', 'Ethiopia'),
	(72, 'FK', 'Falkland Islands (Malvinas)'),
	(73, 'FO', 'Faroe Islands'),
	(74, 'FJ', 'Fiji'),
	(75, 'FI', 'Finland'),
	(76, 'FR', 'France'),
	(77, 'FX', 'France, Metropolitan'),
	(78, 'GF', 'French Guiana'),
	(79, 'PF', 'French Polynesia'),
	(80, 'TF', 'French Southern Territories'),
	(81, 'GA', 'Gabon'),
	(82, 'GM', 'Gambia'),
	(83, 'GE', 'Georgia'),
	(84, 'DE', 'Germany'),
	(85, 'GH', 'Ghana'),
	(86, 'GI', 'Gibraltar'),
	(87, 'GK', 'Guernsey'),
	(88, 'GR', 'Greece'),
	(89, 'GL', 'Greenland'),
	(90, 'GD', 'Grenada'),
	(91, 'GP', 'Guadeloupe'),
	(92, 'GU', 'Guam'),
	(93, 'GT', 'Guatemala'),
	(94, 'GN', 'Guinea'),
	(95, 'GW', 'Guinea-Bissau'),
	(96, 'GY', 'Guyana'),
	(97, 'HT', 'Haiti'),
	(98, 'HM', 'Heard and Mc Donald Islands'),
	(99, 'HN', 'Honduras'),
	(100, 'HK', 'Hong Kong'),
	(101, 'HU', 'Hungary'),
	(102, 'IS', 'Iceland'),
	(103, 'IN', 'India'),
	(104, 'IM', 'Isle of Man'),
	(105, 'ID', 'Indonesia'),
	(106, 'IR', 'Iran (Islamic Republic of)'),
	(107, 'IQ', 'Iraq'),
	(108, 'IE', 'Ireland'),
	(109, 'IL', 'Israel'),
	(110, 'IT', 'Italy'),
	(111, 'CI', 'Ivory Coast'),
	(112, 'JE', 'Jersey'),
	(113, 'JM', 'Jamaica'),
	(114, 'JP', 'Japan'),
	(115, 'JO', 'Jordan'),
	(116, 'KZ', 'Kazakhstan'),
	(117, 'KE', 'Kenya'),
	(118, 'KI', 'Kiribati'),
	(119, 'KP', 'Korea, Democratic People\'s Republic of'),
	(120, 'KR', 'Korea, Republic of'),
	(121, 'XK', 'Kosovo'),
	(122, 'KW', 'Kuwait'),
	(123, 'KG', 'Kyrgyzstan'),
	(124, 'LA', 'Lao People\'s Democratic Republic'),
	(125, 'LV', 'Latvia'),
	(126, 'LB', 'Lebanon'),
	(127, 'LS', 'Lesotho'),
	(128, 'LR', 'Liberia'),
	(129, 'LY', 'Libyan Arab Jamahiriya'),
	(130, 'LI', 'Liechtenstein'),
	(131, 'LT', 'Lithuania'),
	(132, 'LU', 'Luxembourg'),
	(133, 'MO', 'Macau'),
	(134, 'MK', 'Macedonia'),
	(135, 'MG', 'Madagascar'),
	(136, 'MW', 'Malawi'),
	(137, 'MY', 'Malaysia'),
	(138, 'MV', 'Maldives'),
	(139, 'ML', 'Mali'),
	(140, 'MT', 'Malta'),
	(141, 'MH', 'Marshall Islands'),
	(142, 'MQ', 'Martinique'),
	(143, 'MR', 'Mauritania'),
	(144, 'MU', 'Mauritius'),
	(145, 'TY', 'Mayotte'),
	(146, 'MX', 'Mexico'),
	(147, 'FM', 'Micronesia, Federated States of'),
	(148, 'MD', 'Moldova, Republic of'),
	(149, 'MC', 'Monaco'),
	(150, 'MN', 'Mongolia'),
	(151, 'ME', 'Montenegro'),
	(152, 'MS', 'Montserrat'),
	(153, 'MA', 'Morocco'),
	(154, 'MZ', 'Mozambique'),
	(155, 'MM', 'Myanmar'),
	(156, 'NA', 'Namibia'),
	(157, 'NR', 'Nauru'),
	(158, 'NP', 'Nepal'),
	(159, 'NL', 'Netherlands'),
	(160, 'AN', 'Netherlands Antilles'),
	(161, 'NC', 'New Caledonia'),
	(162, 'NZ', 'New Zealand'),
	(163, 'NI', 'Nicaragua'),
	(164, 'NE', 'Niger'),
	(165, 'NG', 'Nigeria'),
	(166, 'NU', 'Niue'),
	(167, 'NF', 'Norfolk Island'),
	(168, 'MP', 'Northern Mariana Islands'),
	(169, 'NO', 'Norway'),
	(170, 'OM', 'Oman'),
	(171, 'PK', 'Pakistan'),
	(172, 'PW', 'Palau'),
	(173, 'PS', 'Palestine'),
	(174, 'PA', 'Panama'),
	(175, 'PG', 'Papua New Guinea'),
	(176, 'PY', 'Paraguay'),
	(177, 'PE', 'Peru'),
	(178, 'PH', 'Philippines'),
	(179, 'PN', 'Pitcairn'),
	(180, 'PL', 'Poland'),
	(181, 'PT', 'Portugal'),
	(182, 'PR', 'Puerto Rico'),
	(183, 'QA', 'Qatar'),
	(184, 'RE', 'Reunion'),
	(185, 'RO', 'Romania'),
	(186, 'RU', 'Russian Federation'),
	(187, 'RW', 'Rwanda'),
	(188, 'KN', 'Saint Kitts and Nevis'),
	(189, 'LC', 'Saint Lucia'),
	(190, 'VC', 'Saint Vincent and the Grenadines'),
	(191, 'WS', 'Samoa'),
	(192, 'SM', 'San Marino'),
	(193, 'ST', 'Sao Tome and Principe'),
	(194, 'SA', 'Saudi Arabia'),
	(195, 'SN', 'Senegal'),
	(196, 'RS', 'Serbia'),
	(197, 'SC', 'Seychelles'),
	(198, 'SL', 'Sierra Leone'),
	(199, 'SG', 'Singapore'),
	(200, 'SK', 'Slovakia'),
	(201, 'SI', 'Slovenia'),
	(202, 'SB', 'Solomon Islands'),
	(203, 'SO', 'Somalia'),
	(204, 'ZA', 'South Africa'),
	(205, 'GS', 'South Georgia South Sandwich Islands'),
	(206, 'ES', 'Spain'),
	(207, 'LK', 'Sri Lanka'),
	(208, 'SH', 'St. Helena'),
	(209, 'PM', 'St. Pierre and Miquelon'),
	(210, 'SD', 'Sudan'),
	(211, 'SR', 'Suriname'),
	(212, 'SJ', 'Svalbard and Jan Mayen Islands'),
	(213, 'SZ', 'Swaziland'),
	(214, 'SE', 'Sweden'),
	(215, 'CH', 'Switzerland'),
	(216, 'SY', 'Syrian Arab Republic'),
	(217, 'TW', 'Taiwan'),
	(218, 'TJ', 'Tajikistan'),
	(219, 'TZ', 'Tanzania, United Republic of'),
	(220, 'TH', 'Thailand'),
	(221, 'TG', 'Togo'),
	(222, 'TK', 'Tokelau'),
	(223, 'TO', 'Tonga'),
	(224, 'TT', 'Trinidad and Tobago'),
	(225, 'TN', 'Tunisia'),
	(226, 'TR', 'Turkey'),
	(227, 'TM', 'Turkmenistan'),
	(228, 'TC', 'Turks and Caicos Islands'),
	(229, 'TV', 'Tuvalu'),
	(230, 'UG', 'Uganda'),
	(231, 'UA', 'Ukraine'),
	(232, 'AE', 'United Arab Emirates'),
	(233, 'GB', 'United Kingdom'),
	(234, 'US', 'United States'),
	(235, 'UM', 'United States minor outlying islands'),
	(236, 'UY', 'Uruguay'),
	(237, 'UZ', 'Uzbekistan'),
	(238, 'VU', 'Vanuatu'),
	(239, 'VA', 'Vatican City State'),
	(240, 'VE', 'Venezuela'),
	(241, 'VN', 'Vietnam'),
	(242, 'VG', 'Virgin Islands (British)'),
	(243, 'VI', 'Virgin Islands (U.S.)'),
	(244, 'WF', 'Wallis and Futuna Islands'),
	(245, 'EH', 'Western Sahara'),
	(246, 'YE', 'Yemen'),
	(247, 'ZR', 'Zaire'),
	(248, 'ZM', 'Zambia'),
	(249, 'ZW', 'Zimbabwe');
/*!40000 ALTER TABLE `select_countries` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_dresssize
CREATE TABLE IF NOT EXISTS `select_dresssize` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_dresssize: ~9 rows (approximately)
/*!40000 ALTER TABLE `select_dresssize` DISABLE KEYS */;
REPLACE INTO `select_dresssize` (`id`, `name`, `description`) VALUES
	(1, '4', '4'),
	(2, '6', '6'),
	(3, '8', '8'),
	(4, '10', '10'),
	(5, '12', '12'),
	(6, '14', '14'),
	(7, '16', '16'),
	(8, '18', '18'),
	(9, '20+', '20+');
/*!40000 ALTER TABLE `select_dresssize` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_eyes
CREATE TABLE IF NOT EXISTS `select_eyes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_eyes: ~5 rows (approximately)
/*!40000 ALTER TABLE `select_eyes` DISABLE KEYS */;
REPLACE INTO `select_eyes` (`id`, `name`, `description`) VALUES
	(1, 'Blue', 'Blue'),
	(2, 'Brown', 'Brown'),
	(3, 'Green', 'Green'),
	(4, 'Hazel', 'Hazel'),
	(5, 'Other', 'Other');
/*!40000 ALTER TABLE `select_eyes` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_hair
CREATE TABLE IF NOT EXISTS `select_hair` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_hair: ~4 rows (approximately)
/*!40000 ALTER TABLE `select_hair` DISABLE KEYS */;
REPLACE INTO `select_hair` (`id`, `name`, `description`) VALUES
	(1, 'Blonde', 'Blonde'),
	(2, 'Brunette', 'Brunette'),
	(3, 'Redhead', 'Redhead'),
	(4, 'Other', 'Other');
/*!40000 ALTER TABLE `select_hair` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_height
CREATE TABLE IF NOT EXISTS `select_height` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_height: ~24 rows (approximately)
/*!40000 ALTER TABLE `select_height` DISABLE KEYS */;
REPLACE INTO `select_height` (`id`, `name`, `description`) VALUES
	(1, '4 ft 10 in', '4 ft 10 in'),
	(2, '4 ft 11 in', '4 ft 10 in'),
	(3, '5 ft 0 in', '5 ft 0 in'),
	(4, '5 ft 1 in', '5 ft 1 in'),
	(5, '5 ft 2 in', '5 ft 2 in'),
	(6, '5 ft 3 in', '5 ft 3 in'),
	(7, '5 ft 4 in', '5 ft 4 in'),
	(8, '5 ft 5 in', '5 ft 5 in'),
	(9, '5 ft 6 in', '5 ft 6 in'),
	(10, '5 ft 7 in', '5 ft 7 in'),
	(11, '5 ft 8 in', '5 ft 8 in'),
	(12, '5 ft 9 in', '5 ft 9 in'),
	(13, '5 ft 10 in', '5 ft 10 in'),
	(14, '5 ft 11 in', '5 ft 11 in'),
	(15, '6 ft 0 in', '6 ft 0 in'),
	(16, '6 ft 1 in', '6 ft 1 in'),
	(17, '6 ft 2 in', '6 ft 2 in'),
	(18, '6 ft 3 in', '6 ft 3 in'),
	(19, '6 ft 4 in', '6 ft 4 in'),
	(20, '6 ft 5 in', '6 ft 5 in'),
	(21, '6 ft 6 in', '6 ft 6 in'),
	(22, '6 ft 7 in', '6 ft 7 in'),
	(23, '6 ft 8 in', '6 ft 8 in'),
	(24, '6 ft 9 in', '6 ft 9 in');
/*!40000 ALTER TABLE `select_height` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_language
CREATE TABLE IF NOT EXISTS `select_language` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_language: ~21 rows (approximately)
/*!40000 ALTER TABLE `select_language` DISABLE KEYS */;
REPLACE INTO `select_language` (`id`, `name`, `description`) VALUES
	(1, 'English', 'English'),
	(2, 'Chinese', 'Chinese'),
	(3, 'Spanish', 'Spanish'),
	(4, 'Arabic', 'Arabic'),
	(5, 'Bengali', 'Bengali'),
	(6, 'Hindi', 'Hindi'),
	(7, 'Russian', 'Russian'),
	(8, 'Portugese', 'Portuguese'),
	(9, 'Japanese', 'Japanese'),
	(10, 'German', 'German'),
	(11, 'Korean', 'Korean'),
	(12, 'French', 'French'),
	(13, 'Turkish', 'Turkish'),
	(14, 'Vietnamese', 'Vietnamese'),
	(15, 'Italian', 'Italian'),
	(16, 'Polish', 'Polish'),
	(17, 'Ukrainian', 'Ukrainian'),
	(18, 'Persian', 'Persian'),
	(19, 'Romanian', 'Romanian'),
	(20, 'Thai', 'Thai'),
	(21, 'Dutch', 'Dutch');
/*!40000 ALTER TABLE `select_language` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_level
CREATE TABLE IF NOT EXISTS `select_level` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_level: ~4 rows (approximately)
/*!40000 ALTER TABLE `select_level` DISABLE KEYS */;
REPLACE INTO `select_level` (`id`, `name`, `description`) VALUES
	(1, 'Native', 'Native'),
	(2, 'Fluent', 'Fluent'),
	(3, 'Conversational', 'Conversational'),
	(4, 'Still Learning', 'Still Learning');
/*!40000 ALTER TABLE `select_level` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_nationalities
CREATE TABLE IF NOT EXISTS `select_nationalities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=269 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_nationalities: ~19 rows (approximately)
/*!40000 ALTER TABLE `select_nationalities` DISABLE KEYS */;
REPLACE INTO `select_nationalities` (`id`, `name`, `description`) VALUES
	(250, 'Australian', 'Australian'),
	(251, 'English', 'English'),
	(252, 'Irish', 'Irish'),
	(253, 'Spanish', 'Spanish'),
	(254, 'Scotish', 'Scotish'),
	(255, 'American', 'American'),
	(256, 'Canadian', 'Canadian'),
	(257, 'New Zealander', 'New Zealander'),
	(258, 'Asian', 'Asian'),
	(259, 'Sth Amertican', 'Sth Amertican'),
	(260, 'Indian', 'Indian'),
	(261, 'Middle Eastern', 'Middle Eastern'),
	(262, 'European', 'European'),
	(263, 'Italian', 'Italian'),
	(264, 'Russian', 'Russian'),
	(265, 'African', 'African'),
	(266, 'Aboriginal', 'Aboriginal'),
	(267, 'Islander', 'Islander'),
	(268, 'Other', 'Other');
/*!40000 ALTER TABLE `select_nationalities` ENABLE KEYS */;

-- Dumping structure for table escortgem.select_sexualpreference
CREATE TABLE IF NOT EXISTS `select_sexualpreference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.select_sexualpreference: ~4 rows (approximately)
/*!40000 ALTER TABLE `select_sexualpreference` DISABLE KEYS */;
REPLACE INTO `select_sexualpreference` (`id`, `name`, `description`) VALUES
	(1, 'Heterosexual', 'Heterosexual'),
	(2, 'Bisexual', 'Bisexual'),
	(3, 'Lesbian', 'Lesbian'),
	(4, 'Gay', 'Gay');
/*!40000 ALTER TABLE `select_sexualpreference` ENABLE KEYS */;

-- Dumping structure for table escortgem.services
CREATE TABLE IF NOT EXISTS `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serviceid` varchar(100) NOT NULL,
  `servicename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.services: ~35 rows (approximately)
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
REPLACE INTO `services` (`id`, `serviceid`, `servicename`) VALUES
	(1, 'cob', 'COB'),
	(2, 'couples', 'Couples'),
	(3, 'deepthroat', 'Deep throat'),
	(4, 'domination', 'Domination'),
	(5, 'facesitting', 'Face sitting'),
	(6, 'fingering', 'Fingering'),
	(7, 'fisting', 'Fisting'),
	(8, 'footfetish', 'Foot fetish'),
	(9, 'frenchkissing', 'French kissing'),
	(10, 'gfe', 'GFE'),
	(11, 'givinghardsports', 'Giving hardsports'),
	(12, 'receivinghardsports', 'Receiving hardsports'),
	(13, 'lapdancing', 'Lap Dancing'),
	(14, 'massage', 'Massage'),
	(15, 'oralsex', 'Oral sex'),
	(16, 'owo', 'Natural Oral (OWO)'),
	(17, 'parties', 'Parties'),
	(18, 'pse', 'PSE'),
	(19, 'reverseoral', 'Reverse oral'),
	(20, 'givingrimming', 'Giving rimming'),
	(21, 'receivingrimming', 'Receiving rimming'),
	(22, 'roleplay', 'Role play'),
	(23, 'sextoys', 'Sex toys'),
	(24, 'spanking', 'Spanking'),
	(25, 'strapon', 'Strapon'),
	(26, 'striptease', 'Striptease'),
	(27, 'teabagging', 'Teabagging'),
	(28, 'tieandtease', 'Tie and tease'),
	(29, 'uniforms', 'Uniforms'),
	(30, 'givingwatersports', 'Giving watersports'),
	(31, 'receivingwatersports', 'Receiving watersports'),
	(32, 'webcamsex', 'Webcam sex'),
	(33, 'cim', 'CIM'),
	(34, 'greek', 'Greek'),
	(35, 'bdsm', 'BDSM');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;

-- Dumping structure for table escortgem.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `email_verified` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `mustChangePassword` char(255) DEFAULT NULL,
  `banned` char(255) DEFAULT NULL,
  `suspended` char(255) DEFAULT NULL,
  `active` char(255) DEFAULT NULL,
  `passwordreset` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `username_2` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table escortgem.users: ~3 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `name`, `username`, `email`, `password`, `salt`, `email_verified`, `image`, `phone`, `type`, `address1`, `address2`, `city`, `state`, `postcode`, `country`, `mustChangePassword`, `banned`, `suspended`, `active`, `passwordreset`, `createdAt`, `updatedAt`) VALUES
	(5, NULL, 'test', 'info@chicit.com.au', '$2a$10$YpUxtgZMOSYWKRQeXTwkhe2jA3IdBNbSSNoisnsqOyLBOM/I8x3di', '$2a$10$YpUxtgZMOSYWKRQeXTwkhe', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(7, NULL, 'agency', 'agency@agency.com', '$2a$10$TLH/bGqUJUHrEn51bmDxselBbTvdsSAv6mJ1rwzcV51LTcikG5ZOu', '$2a$10$TLH/bGqUJUHrEn51bmDxse', NULL, NULL, NULL, 'agency', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(11, NULL, 'blah', 'blah@blah.com', '$2a$10$jNsac7CKbJ/swoLa2C6eeulmNgSYvx6WI3FAuAImaPRTjK7KZJ/.i', '$2a$10$jNsac7CKbJ/swoLa2C6eeu', NULL, NULL, NULL, 'independent', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(12, NULL, 'escort', 'escort@escort.com', '$2a$10$sE4aheb3QAR0TEgaDZrSGej1O5tJB/HhvPax4XmCP.7mQPB4Ldrgi', '$2a$10$sE4aheb3QAR0TEgaDZrSGe', NULL, NULL, NULL, 'independent', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
