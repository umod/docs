---
hide_table_of_contents: true
---

# CanUpdateSign

## Usage

* Called when the player attempts to change the text on a sign or lock it, or update a photo frame
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanUpdateSign(BasePlayer player, CarvablePumpkin pumpkin)
{
    Puts("CanUpdateSign works!");
    return null;
}
```

```csharp title=""
bool? CanUpdateSign(BasePlayer player, Signage sign)
{
    Puts("CanUpdateSign works!");
    return null;
}
```

```csharp title=""
bool? CanUpdateSign(BasePlayer player, PhotoFrame photoFrame)
{
    Puts("CanUpdateSign works!");
    return null;
}
```
