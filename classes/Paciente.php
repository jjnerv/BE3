<?php

    class Paciente {

        public function post_save($data) {

            $sql = "";
            if ($data->id == 0)
            {
                //insert
                $sql = "INSERT INTO pacientes (name,lastname,birthday,gender,cpf,rg,staterg,email,cellphone,phone,healthcare,membershipcard,membershipcardvalidity,password,status) VALUES (:name,:lastname,:birthday,:gender,:cpf,:rg,:staterg,:email,:cellphone,:phone,:healthcare,:membershipcard,:membershipcardvalidity,:password,:status)";
                
            }
            else
            {
                //update
                $sql = "UPDATE pacientes SET name=:name,lastname=:lastname,birthday=:birthday,gender=:gender,cpf=:cpf,rg=:rg,staterg=:staterg,email=:email,cellphone=:cellphone,phone=:phone,healthcare=:healthcare,membershipcard=:membershipcard,membershipcardvalidity=:membershipcardvalidity,password=:password,status=:status WHERE id=:id";

            }

            $stmt = DB::prepare($sql);
            $stmt->bindParam("name", $data->name);
            $stmt->bindParam("lastname", $data->lastname);
            $stmt->bindParam("birthday", $data->birthday);
            $stmt->bindParam("gender", $data->gender);
            $stmt->bindParam("cpf", $data->cpf);
            $stmt->bindParam("rg", $data->rg);
            $stmt->bindParam("staterg", $data->staterg);
            $stmt->bindParam("email", $data->email);
            $stmt->bindParam("cellphone", $data->cellphone);
            $stmt->bindParam("phone", $data->phone);
            $stmt->bindParam("healthcare", $data->healthcare);
            $stmt->bindParam("membershipcard", $data->membershipcard);
            $stmt->bindParam("membershipcardvalidity", $data->membershipcardvalidity);
            $stmt->bindParam("password", $data->password);
            $stmt->bindParam("status", $data->status);


            if ($data->id!=0)
                $stmt->bindParam ("id", $data->id);

            $stmt->execute();

            if ($data->id==0)
                $data->id = DB::lastInsertId();

            return $data;

        }


        function get_list($id) {

            $sql = "SELECT c.id,u.nome,u.senha,u.email,u.login,c.cpf,u.id as id FROM pacientes u, pacientes c WHERE u.id=c.id AND c.id=:id";
            $stmt = DB::prepare($sql);
            $stmt->bindParam("id", $id);
            $stmt->execute();
            return($stmt->fetch());
        }


        function get_listAll() {
            $sql = "SELECT * FROM pacientes";
            $stmt = DB::prepare($sql);
            $stmt->execute();

            $result = $stmt->fetchAll();
            return $result;
        }

        function post_delete($paciente) {
            $sqlDeletepaciente = "DELETE FROM pacientes WHERE id=:id";

            try {

                DB::beginTransaction();

                $stmt = DB::prepare($sqlDeletepaciente);
                $stmt->bindParam("id", $paciente->id);
                $stmt->execute();

                DB::commit();
            } catch (Exception $exc) {
                DB::rollBack();
                throw new Exception($exc->getMessage());
            }
        }

        function post_search($data) {
            $data->busca = "%{$data->busca}%";
            $sql = "SELECT c.id,u.nome,u.email,u.login,c.cpf,u.id as id FROM pacientes u, pacientes c WHERE u.id=c.id AND (u.nome LIKE :busca OR c.cpf LIKE :busca)";
            $stmt = DB::prepare($sql);
            $stmt->bindParam("busca", $data->busca);
            $stmt->execute();
            return $stmt->fetchAll();
        }

    }

?>