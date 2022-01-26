---
hide_table_of_contents: true
---

# OnSignUpdated

## Usage

* Called after the player has changed the text on a sign or updated a photo frame
* No Return behavior

## Examples

```csharp title=""
void OnSignUpdated(Signage sign, BasePlayer player, string text)
{
    Puts("OnSignUpdated works!");
}
```

```csharp title=""
void OnSignUpdated(PhotoFrame photoFrame, BasePlayer player)
{
    Puts("OnSignUpdated works!");
}
```