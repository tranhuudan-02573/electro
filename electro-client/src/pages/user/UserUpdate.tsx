import React from 'react';
import {
  Button,
  Divider,
  Grid,
  Group,
  MultiSelect,
  Paper,
  PasswordInput,
  Select,
  Stack,
  TextInput
} from '@mantine/core';
import { useParams } from 'react-router-dom';
import { CreateUpdateTitle, DefaultPropertyPanel } from 'components';
import UserConfigs from 'pages/user/UserConfigs';
import useUserUpdateViewModel from 'pages/user/UserUpdate.vm';

function UserUpdate() {
  const { id } = useParams();
  const {
    user,
    form,
    handleFormSubmit,
    genderSelectList,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    roleSelectList,
    isDisabledUpdateButton,
  } = useUserUpdateViewModel(Number(id));

  if (!user) {
    return null;
  }

  return (
    <Stack sx={{ maxWidth: 800 }}>
      <CreateUpdateTitle
        managerPath={UserConfigs.managerPath}
        title={UserConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={user.id}
        createdAt={user.createdAt}
        updatedAt={user.updatedAt}
        createdBy="1"
        updatedBy="1"
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack spacing={0}>
            <Grid p="sm">
              <Grid.Col xs={6}>
                <TextInput
                  required
                  label={UserConfigs.properties.username.label}
                  {...form.getInputProps('username')}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <PasswordInput
                  label={UserConfigs.properties.password.label}
                  {...form.getInputProps('password')}
                  placeholder="Nhập mật khẩu mới hoặc để trống"
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <TextInput
                  required
                  label={UserConfigs.properties.fullname.label}
                  {...form.getInputProps('fullname')}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <TextInput
                  required
                  label={UserConfigs.properties.email.label}
                  type="email"
                  {...form.getInputProps('email')}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <TextInput
                  required
                  label={UserConfigs.properties.phone.label}
                  {...form.getInputProps('phone')}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={UserConfigs.properties.gender.label}
                  placeholder="--"
                  data={genderSelectList}
                  {...form.getInputProps('gender')}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  required
                  label={UserConfigs.properties['address.line'].label}
                  {...form.getInputProps('address.line')}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={UserConfigs.properties['address.provinceId'].label}
                  placeholder="--"
                  searchable
                  data={provinceSelectList}
                  {...form.getInputProps('address.provinceId')}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={UserConfigs.properties['address.districtId'].label}
                  placeholder="--"
                  searchable
                  data={districtSelectList}
                  {...form.getInputProps('address.districtId')}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  label={UserConfigs.properties.avatar.label}
                  {...form.getInputProps('avatar')}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={UserConfigs.properties.status.label}
                  placeholder="--"
                  data={statusSelectList}
                  {...form.getInputProps('status')}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <MultiSelect
                  required
                  label={UserConfigs.properties.roles.label}
                  placeholder="--"
                  data={roleSelectList}
                  {...form.getInputProps('roles')}
                />
              </Grid.Col>
            </Grid>

            <Divider mt="xs"/>

            <Group position="apart" p="sm">
              <Button variant="default" onClick={form.reset}>Mặc định</Button>
              <Button type="submit" disabled={isDisabledUpdateButton}>Cập nhật</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default UserUpdate;
