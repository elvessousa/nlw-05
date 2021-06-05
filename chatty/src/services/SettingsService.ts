import { getCustomRepository, Repository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';
import { Setting } from '../entities/Setting';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

export class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {
    const settings = this.settingsRepository.create({ chat, username });
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    await this.settingsRepository.save(settings);

    return settings;
  }
}
