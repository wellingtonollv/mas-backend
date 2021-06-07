import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivies1620532134767 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"activities",
                columns: [
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"activity_date",
                        type:"timestamp"
                    },
                    {
                        name:"grade",
                        type:"decimal",
                    },
                    {
                        name:"courseUnitId",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name:'ActivyCourseUnit',
                        referencedTableName:'course_units',
                        referencedColumnNames: ['id'],
                        columnNames: ['courseUnitId']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activities");
    }

}
