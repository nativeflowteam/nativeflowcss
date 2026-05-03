import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  type ListRenderItemInfo,
  type PressableStateCallbackType,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  align,
  bdr,
  decoration,
  flex,
  fx,
  h,
  justify,
  m,
  overflow,
  p,
  text,
  w,
} from 'nativeflowcss';

type Todo = { id: string; text: string; done: boolean };

const COLORS = {
  background: '#000000',
  groupedSurface: '#1C1C1E',
  inputSurface: '#2C2C2E',
  separator: '#38383A',
  label: '#FFFFFF',
  labelSecondary: '#8E8E93',
  labelTertiary: '#48484A',
  systemBlue: '#0A84FF',
  systemGreen: '#30D158',
  systemRed: '#FF453A',
} as const;

const FONT = text.font_family('System');

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [draft, setDraft] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingDraft, setEditingDraft] = useState('');

  const remainingCount = todos.filter((t) => !t.done).length;
  const doneCount = todos.length - remainingCount;

  const add = () => {
    const value = draft.trim();
    if (!value) return;
    const next: Todo = { id: Date.now().toString(), text: value, done: false };
    setTodos((prev) => [next, ...prev]);
    setDraft('');
  };

  const toggle = (id: string) => {
    if (editingId === id) return;
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const remove = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const beginEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingDraft(todo.text);
  };

  const commitEdit = () => {
    if (editingId == null) return;
    const value = editingDraft.trim();
    if (!value) {
      remove(editingId);
      return;
    }
    setTodos((prev) => prev.map((t) => (t.id === editingId ? { ...t, text: value } : t)));
    setEditingId(null);
  };

  const renderItem = ({ item, index }: ListRenderItemInfo<Todo>) => {
    const isLast = index === todos.length - 1;
    const isEditing = editingId === item.id;

    return (
      <View
        style={[
          flex.row,
          align.items_center,
          flex.gap_3,
          p.px_4,
          h.h_14,
          !isLast && bdr.b_w_1,
          !isLast && bdr.b_color_(COLORS.separator),
        ]}
      >
        <Pressable
          onPress={() => toggle(item.id)}
          hitSlop={8}
          style={({ pressed }: PressableStateCallbackType) => [
            w.w_6,
            h.h_6,
            bdr.rounded_full,
            align.items_center,
            justify.center,
            item.done
              ? fx.bg_color_(COLORS.systemGreen)
              : [bdr.w_1, bdr.color_(COLORS.labelTertiary)],
            pressed && fx.opacity_60,
          ]}
        >
          {item.done && (
            <Text style={[FONT, text.fs_xs, text.fw_bold, text.color_(COLORS.label)]}>
              {'\u2713'}
            </Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => beginEdit(item)}
          style={[flex.f_1]}
          disabled={isEditing}
        >
          {isEditing ? (
            <TextInput
              value={editingDraft}
              onChangeText={setEditingDraft}
              onSubmitEditing={commitEdit}
              onBlur={commitEdit}
              autoFocus
              returnKeyType="done"
              selectionColor={COLORS.systemBlue}
              keyboardAppearance="dark"
              style={[
                FONT,
                text.fs_base,
                text.fw_semibold,
                text.color_(COLORS.label),
                p.p_0,
              ]}
            />
          ) : (
            <Text
              numberOfLines={1}
              style={[
                FONT,
                text.fs_base,
                text.fw_semibold,
                item.done
                  ? [text.color_(COLORS.labelSecondary), decoration.line_through]
                  : text.color_(COLORS.label),
              ]}
            >
              {item.text}
            </Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => remove(item.id)}
          hitSlop={8}
          style={({ pressed }: PressableStateCallbackType) => [
            w.w_11,
            h.h_11,
            align.items_center,
            justify.center,
            pressed && fx.opacity_60,
          ]}
        >
          {({ pressed }) => (
            <Text
              style={[
                FONT,
                text.fs_base,
                text.fw_normal,
                text.color_(pressed ? COLORS.systemRed : COLORS.labelTertiary),
              ]}
            >
              {'\u2715'}
            </Text>
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={[flex.f_1, fx.bg_color_(COLORS.background)]}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={[flex.f_1]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={[flex.f_1, p.px_4, p.pt_8]}>
          <View style={[m.mb_5]}>
            <Text
              style={[
                FONT,
                text.fs_4xl,
                text.fw_bold,
                text.tracking_tight,
                text.color_(COLORS.label),
              ]}
            >
              Todos
            </Text>
            <Text
              style={[
                FONT,
                text.fs_sm,
                text.fw_normal,
                text.color_(COLORS.labelSecondary),
                m.mt_1,
              ]}
            >
              {todos.length === 0
                ? 'No tasks yet'
                : `${remainingCount} ${remainingCount === 1 ? 'task' : 'tasks'} \u00B7 ${doneCount} done`}
            </Text>
          </View>

          <View
            style={[
              flex.row,
              align.items_center,
              flex.gap_2,
              p.p_2,
              bdr.rounded_xl,
              fx.bg_color_(COLORS.groupedSurface),
              m.mb_5,
            ]}
          >
            <TextInput
              value={draft}
              onChangeText={setDraft}
              onSubmitEditing={add}
              placeholder="New task"
              placeholderTextColor={COLORS.labelSecondary}
              selectionColor={COLORS.systemBlue}
              keyboardAppearance="dark"
              returnKeyType="done"
              style={[
                FONT,
                flex.f_1,
                text.fs_base,
                text.color_(COLORS.label),
                p.px_3,
                p.py_2,
              ]}
            />
            <Pressable
              onPress={add}
              disabled={draft.trim().length === 0}
              style={({ pressed }: PressableStateCallbackType) => [
                w.w_10,
                h.h_10,
                bdr.rounded_full,
                align.items_center,
                justify.center,
                fx.bg_color_(COLORS.systemBlue),
                draft.trim().length === 0 && fx.opacity_40,
                pressed && fx.opacity_80,
              ]}
            >
              <Text style={[FONT, text.fs_xl, text.fw_semibold, text.color_(COLORS.label)]}>
                {'+'}
              </Text>
            </Pressable>
          </View>

          {todos.length === 0 ? (
            <View style={[flex.f_1, align.items_center, justify.center, p.p_8]}>
              <Text
                style={[
                  FONT,
                  text.fs_lg,
                  text.fw_semibold,
                  text.color_(COLORS.label),
                  text.center,
                ]}
              >
                No Tasks
              </Text>
              <Text
                style={[
                  FONT,
                  text.fs_xs,
                  text.fw_normal,
                  text.color_(COLORS.labelSecondary),
                  text.center,
                  m.mt_2,
                ]}
              >
                Add your first task above.
              </Text>
            </View>
          ) : (
            <View
              style={[
                bdr.rounded_xl,
                fx.bg_color_(COLORS.groupedSurface),
                overflow.hidden,
              ]}
            >
              <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                keyboardShouldPersistTaps="handled"
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
