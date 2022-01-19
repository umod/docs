---
hide_table_of_contents: true
---

# OnSaveLoad

## Usage

* Called before a save file and its entities are loaded
* Return true to override save load handling

## Examples

```csharp title="Log amount of entities to load from save file"
void OnSaveLoad(Dictionary<BaseEntity, ProtoBuf.Entity> entities)
{
    Puts($"{entities.Count} entities loaded from save");
}
```

```csharp title="Prevent entities from being wiped"
bool OnSaveLoad(Dictionary<BaseEntity, ProtoBuf.Entity> entities)
{
    string saveFileName = string.Concat(World.SaveFolderName, "/", World.SaveFileName);
    if (SaveRestore.Load(saveFileName, allowOutOfDateSaves))
    {
        if (entities != null)
        {
            entities.Clear();
        }
        Puts($"Save loading for {saveFileName} overridden");
        return true;
    }

    return false;
}
```
