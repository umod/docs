---
hide_table_of_contents: true
---

# CanLootEntity

## Usage

* Called when the player starts looting a DroppedItemContainer, LootableCorpse, ResourceContainer, BaseRidableAnimal, or StorageContainer entity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanLootEntity(BasePlayer player, DroppedItemContainer container)
{
    Puts("CanLootEntity works!");
    return null;
}
```

```csharp title=""
object CanLootEntity(BasePlayer player, LootableCorpse  corpse)
{
    Puts("CanLootEntity works!");
    return null;
}
```

```csharp title=""
object CanLootEntity(BasePlayer player, ResourceContainer container)
{
    Puts("CanLootEntity works!");
    return null;
}
```

```csharp title=""
object CanLootEntity(BasePlayer player, BaseRidableAnimal animal)
{
    Puts("CanLootEntity works!");
    return null;
}
```

```csharp title=""
object CanLootEntity(BasePlayer player, StorageContainer container)
{
    Puts("CanLootEntity works!");
    return null;
}
```
