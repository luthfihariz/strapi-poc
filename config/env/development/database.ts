export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'aws-0-ap-southeast-1.pooler.supabase.com'),
			port: env.int('DATABASE_PORT', 6543),
			database: env('DATABASE_NAME', 'postgres'),
			user: env('DATABASE_USERNAME', 'postgres.qeupkwfzcgwbavnpwhzn'),
			password: env('DATABASE_PASSWORD', 'NAXeFYeyAEfOCfSR'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
